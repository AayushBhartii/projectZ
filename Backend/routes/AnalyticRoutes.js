const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const moment = require("moment");

// Get analytics data for orders
router.get("/order-analytics", async (req, res) => {
  try {
    const { timeframe } = req.query;
    const now = moment();
    let startDate;

    // Set date range based on timeframe
    switch (timeframe) {
      case "daily":
        startDate = moment().subtract(6, "days").startOf("day");
        break;
      case "weekly":
        startDate = moment().subtract(3, "weeks").startOf("week");
        break;
      case "monthly":
        startDate = moment().subtract(11, "months").startOf("month");
        break;
      default:
        startDate = moment().subtract(6, "days").startOf("day");
    }

    // Get orders within date range
    const orders = await Order.find({
      time: { $gte: startDate.toDate(), $lte: now.toDate() }
    });

    // Process data based on timeframe
    let analyticsData = [];
    if (timeframe === "daily") {
      for (let i = 0; i < 7; i++) {
        const date = moment().subtract(i, "days");
        const dayOrders = orders.filter(order =>
          moment(order.time).format("ddd") === date.format("ddd")
        );

        analyticsData.unshift({
          date: date.format("ddd"),
          orders: dayOrders.length,
          totalPurchase: dayOrders.reduce((sum, order) =>
            sum + parseFloat(order.total.replace("$", "")), 0)
        });
      }
    } else if (timeframe === "weekly") {
      for (let i = 0; i < 4; i++) {
        const weekStart = moment().subtract(i, "weeks").startOf("week");
        const weekEnd = weekStart.clone().endOf("week");

        const weekOrders = orders.filter(order =>
          moment(order.time).isBetween(weekStart, weekEnd, null, "[]")
        );

        analyticsData.unshift({
          week: `Week ${4 - i}`,
          orders: weekOrders.length,
          totalPurchase: weekOrders.reduce((sum, order) =>
            sum + parseFloat(order.total.replace("$", "")), 0)
        });
      }
    } else if (timeframe === "monthly") {
      for (let i = 0; i < 12; i++) {
        const monthStart = moment().subtract(i, "months").startOf("month");
        const monthEnd = monthStart.clone().endOf("month");

        const monthOrders = orders.filter(order =>
          moment(order.time).isBetween(monthStart, monthEnd, null, "[]")
        );

        analyticsData.unshift({
          month: monthStart.format("MMM"),
          orders: monthOrders.length,
          totalPurchase: monthOrders.reduce((sum, order) =>
            sum + parseFloat(order.total.replace("$", "")), 0)
        });
      }
    }

    res.json(analyticsData);
  } catch (error) {
    console.error("Error fetching order analytics:", error);
    res.status(500).json({ error: "Failed to fetch order analytics" });
  }
});

// Get meal type analytics
router.get("/mealtype-analytics", async (req, res) => {
  try {
    const { timeframe } = req.query;
    const now = moment();
    let startDate;

    // Set date range based on timeframe
    switch (timeframe) {
      case "Today":
        startDate = moment().startOf("day");
        break;
      case "This Week":
        startDate = moment().startOf("week");
        break;
      case "This Month":
        startDate = moment().startOf("month");
        break;
      default:
        startDate = moment().startOf("day");
    }

    // Get orders within date range
    const orders = await Order.find({
      time: { $gte: startDate.toDate(), $lte: now.toDate() }
    });

    // Group orders by meal type and count
    const mealTypeCounts = orders.reduce((acc, order) => {
      if (!acc[order.mealType]) {
        acc[order.mealType] = 0;
      }
      acc[order.mealType] += order.quantity;
      return acc;
    }, {});

    // Convert to array format expected by frontend
    const analyticsData = Object.entries(mealTypeCounts).map(([category, count]) => ({
      category,
      count
    }));

    res.json(analyticsData);
  } catch (error) {
    console.error("Error fetching meal type analytics:", error);
    res.status(500).json({ error: "Failed to fetch meal type analytics" });
  }
});

// Get today's, weekly, and monthly orders and revenue
router.get("/order-summary", async (req, res) => {
  try {
    const now = moment();
    const startOfToday = moment().startOf("day");
    const startOfWeek = moment().startOf("week");
    const startOfMonth = moment().startOf("month");

    // Fetch orders for today, this week, and this month
    const totalOrders = await Order.find();
    const todayOrders = await Order.find({ time: { $gte: startOfToday.toDate() } });
    const weeklyOrders = await Order.find({ time: { $gte: startOfWeek.toDate() } });
    const monthlyOrders = await Order.find({ time: { $gte: startOfMonth.toDate() } });

    // Calculate total revenue
    const calculateRevenue = (orders) =>
      orders.reduce((sum, order) => sum + parseFloat(order.total.replace("$", "")), 0);

    res.json({
      allTime: {
        orders: totalOrders.length,
        revenue: calculateRevenue(totalOrders),
      },
      today: {
        orders: todayOrders.length,
        revenue: calculateRevenue(todayOrders),
      },
      thisWeek: {
        orders: weeklyOrders.length,
        revenue: calculateRevenue(weeklyOrders),
      },
      thisMonth: {
        orders: monthlyOrders.length,
        revenue: calculateRevenue(monthlyOrders),
      },
    });
  } catch (error) {
    console.error("Error fetching order summary:", error);
    res.status(500).json({ error: "Failed to fetch order summary" });
  }
});

// Get total users and unique emails
router.get("/user-summary", async (req, res) => {
  try {
    // const totalUsers = await User.countDocuments();
    const totalUsers = await Order.distinct("email");

    res.json({
      totalUsers: totalUsers.length,
    });
  } catch (error) {
    console.error("Error fetching user summary:", error);
    res.status(500).json({ error: "Failed to fetch user summary" });
  }
});

// Get average order value for today, this week, and overall
router.get("/average-order-value", async (req, res) => {
  try {
    const now = moment();
    const startOfToday = moment().startOf("day");
    const startOfWeek = moment().startOf("week");
    const startOfMonth = moment().startOf("month");

    const totalOrders = await Order.find();
    const todayOrders = await Order.find({ time: { $gte: startOfToday.toDate() } });
    const weeklyOrders = await Order.find({ time: { $gte: startOfWeek.toDate() } });
    const monthlyOrders = await Order.find({ time: { $gte: startOfMonth.toDate() } });

    const calculateAOV = (orders) => {
      if (orders.length === 0) return 0;
      const revenue = orders.reduce((sum, order) => sum + parseFloat(order.total.replace("$", "")), 0);
      return revenue / orders.length;
    };

    res.json({
      todayAOV: calculateAOV(todayOrders),
      thisWeekAOV: calculateAOV(weeklyOrders),
      thisMonthAOV: calculateAOV(monthlyOrders),
      allTimeAOV: calculateAOV(totalOrders),
    });
  } catch (error) {
    console.error("Error fetching average order value:", error);
    res.status(500).json({ error: "Failed to fetch AOV data" });
  }
});
module.exports = router;