const express = require("express");
const mongoose = require("mongoose");
const Tiffin = require("../models/Tiffin");

const router = express.Router();

// Create new tiffin details
router.post('/add-tiffin', async (req, res) => {
  try {
    const { email, phone, tiffinName, category, address, operatingTimes, serviceClouserDay, additionalSettings } = req.body;

    // Validate required fields
    // if (!email || !phone || !tiffinName || !category || !address || operatingTimes || serviceClouserDay || additionalSettings ) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'All fields are required'
    //   });
    // }

    // Create new tiffin document
    const newTiffin = new Tiffin({
      kitchenName: tiffinName,
      ownerMail: email,
      ownerPhoneNo: {
        countryCode: phone.countryCode,
        number: phone.number,
        fullNumber: phone.fullNumber
      },
      category: [category],
      address: address,
      operatingTimes: operatingTimes,
      serviceClouserDay: serviceClouserDay,
      freeDelivery: additionalSettings.freeDelivery,
      specialMealDay: additionalSettings.specialMealDay,
      deliveryCity: additionalSettings.deliveryCity,
      specialEvents: additionalSettings.specialEvents,
      houseParty: additionalSettings.houseParty,
      catering: additionalSettings.catering,
      menu: {
        plans: [{ label: "1" }]
      }
    });
    // Save to database
    const savedTiffin = await newTiffin.save();

    res.status(201).json({
      success: true,
      data: savedTiffin
    });

  } catch (error) {
    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email or phone number already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get tiffin details by email
router.get('/tiffin/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const tiffin = await Tiffin.findOne({ ownerMail: email });

    if (!tiffin) {
      return res.status(404).json({
        success: false,
        message: 'Tiffin not found'
      });
    }

    res.status(200).json({
      success: true,
      data: tiffin
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get tiffin details by id
router.get('/get-tiffin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tiffin = await Tiffin.findById(id);

    if (!tiffin) {
      return res.status(404).json({
        success: false,
        message: 'Tiffin not found'
      });
    }

    res.status(200).json({
      tiffin
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Get all tiffin details
router.get('/tiffin', async (req, res) => {
  try {
    const tiffin = await Tiffin.find();

    if (!tiffin) {
      return res.status(404).json({
        success: false,
        message: 'Tiffin not found'
      });
    }

    res.status(200).json({
      tiffin
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Update tiffin details
router.put('/tiffin/:email', async (req, res) => {
  try {
    const { email, phone, tiffinName, category, address, operatingTimes, serviceClouserDay, additionalSettings } = req.body;

    const updateData = {
      kitchenName: tiffinName,
      ownerMail: email,
      // ownerPhoneNo: phone,
      ownerPhoneNo: {
        countryCode: phone.countryCode,
        number: phone.number,
        fullNumber: phone.fullNumber
      },
      category: [category],
      address: address,
      operatingTimes: operatingTimes,
      serviceClouserDay: serviceClouserDay,// Schema expects an array,
      freeDelivery: additionalSettings.freeDelivery,
      specialMealDay: additionalSettings.specialMealDay,
      deliveryCity: additionalSettings.deliveryCity,
      specialEvents: additionalSettings.specialEvents,
      houseParty: additionalSettings.houseParty,
      catering: additionalSettings.catering
    };

    const updatedTiffin = await Tiffin.findOneAndUpdate(
      { ownerMail: req.params.email },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedTiffin) {
      return res.status(404).json({
        success: false,
        message: 'Tiffin not found'
      });
    }

    res.status(200).json({
      success: true,
      data: updatedTiffin
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

router.post("/add-plan/:email", async (req, res) => {
  const { label } = req.body;
  const { email } = req.params;

  if (!label) return res.status(400).json({ message: "Plan label is required." });

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });

    tiffin.menu.plans.push({ label });
    await tiffin.save();
    res.status(201).json({ message: "Plan added successfully.", tiffin });
  } catch (error) {
    console.error("Error adding plan:", error);
    res.status(500).json({ message: "Error adding plan.", error: error.message });
  }
});

router.put("/edit-meal-plan/:planId/:email", async (req, res) => {
  const { planId, email } = req.params;
  const { label } = req.body;

  if (!label) {
    return res.status(400).json({ message: "Plan label is required." });
  }

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    const plan = tiffin.menu.plans.find((p) => p._id.toString() === planId);
    if (!plan) return res.status(404).json({ message: "Plan not found." });

    // Update the plan label
    plan.label = label;

    await tiffin.save();
    res.status(200).json({ message: "Meal plan updated successfully.", tiffin });
  } catch (error) {
    res.status(500).json({ message: "Error updating meal plan.", error });
  }
});

// Add a new meal type
router.post("/add-meal-type/:email", async (req, res) => {
  const { label, description, prices } = req.body;
  const { email } = req.params;

  if (!label || !description || !prices) {
    return res.status(400).json({ message: "Meal type details are incomplete." });
  }

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    tiffin.menu.mealTypes.push({
      mealTypeId: new mongoose.Types.ObjectId(),
      label,
      description,
      prices,
    });
    await tiffin.save();
    res.status(201).json({ message: "Meal type added successfully.", tiffin });
  } catch (error) {
    res.status(500).json({ message: "Error adding meal type.", error });
  }
});

router.post("/manage_mealdays&Flexidates/:email", async (req, res) => {
  const { serviceDays, isFlexibleDates } = req.body;
  const { email } = req.params;
  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    // tiffin.menu.serviceDays = serviceDays || tiffin.menu.serviceDays;
    tiffin.menu.serviceDays = Array.isArray(serviceDays) ? serviceDays : tiffin.menu.serviceDays;
    tiffin.menu.isFlexibleDates = isFlexibleDates !== undefined ? isFlexibleDates : tiffin.menu.isFlexibleDates;
    await tiffin.save();
    res.status(201).json({ message: "mealdays&Flexidates added successfully.", tiffin });
  } catch (error) {
    res.status(500).json({ message: "Error adding mealdays&Flexidates", error });
  }
});


// Apply meal plans route
router.post("/apply-meal-plans/:email", async (req, res) => {
  const { mealTypeId, applyTo, selectedPlans } = req.body;
  const { email } = req.params;

  // console.log("Received data:", { mealTypeId, applyTo, selectedPlans }); // Debug log

  if (!mealTypeId || !applyTo) {
    return res.status(400).json({ message: "Meal type ID and apply option are required." });
  }

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    const mealType = tiffin.menu.mealTypes.find(
      (type) => type.mealTypeId.toString() === mealTypeId
    );

    if (!mealType) {
      console.log("Available meal types:", tiffin.menu.mealTypes.map(t => t.mealTypeId)); // Debug log
      return res.status(404).json({ message: "Meal type not found." });
    }

    // Handle plan assignment
    if (applyTo === "all") {
      // Get all plan labels directly from the plans array
      mealType.specificPlans = tiffin.menu.plans.map(plan => plan.label);
    } else if (applyTo === "specific" && Array.isArray(selectedPlans)) {
      // Store the selected plan labels directly
      mealType.specificPlans = selectedPlans;
    }

    // console.log("Updated meal type:", mealType); // Debug log

    await tiffin.save();
    res.status(200).json({
      message: "Meal plans applied successfully.",
      tiffin,
      appliedPlans: mealType.specificPlans // Return for verification
    });

  } catch (error) {
    console.error("Error applying meal plans:", error);
    res.status(500).json({ message: "Error applying meal plans.", error });
  }
});

// Edit meal type and plans route
router.put("/edit-meal-type/:mealTypeId/:email", async (req, res) => {
  const { mealTypeId, email } = req.params;
  const { label, description, prices, applyTo, selectedPlans } = req.body;

  console.log("Edit request received:", {
    mealTypeId,
    label,
    description,
    prices,
    applyTo,
    selectedPlans
  });

  if (!mealTypeId || !label || !description) {
    return res.status(400).json({
      message: "Meal type ID, label, and description are required."
    });
  }

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    // Find the meal type to edit
    const mealTypeIndex = tiffin.menu.mealTypes.findIndex(
      (type) => type.mealTypeId.toString() === mealTypeId
    );

    if (mealTypeIndex === -1) {
      console.log("Available meal types:", tiffin.menu.mealTypes.map(t => t.mealTypeId));
      return res.status(404).json({ message: "Meal type not found." });
    }

    // Update basic meal type information
    tiffin.menu.mealTypes[mealTypeIndex].label = label;
    tiffin.menu.mealTypes[mealTypeIndex].description = description;
    tiffin.menu.mealTypes[mealTypeIndex].prices = prices;


    if (applyTo === "all") {
      // Assign all plan values (numbers) to specificPlans
      tiffin.menu.mealTypes[mealTypeIndex].specificPlans = tiffin.menu.plans.map(plan => plan.label);
    } else if (applyTo === "specific" && Array.isArray(selectedPlans)) {
      // Map selectedPlans to numeric values
      const validPlans = tiffin.menu.plans.map(plan => plan.label);
      tiffin.menu.mealTypes[mealTypeIndex].specificPlans = selectedPlans.filter(plan => validPlans.includes(plan));
    }


    console.log("Updated meal type:", tiffin.menu.mealTypes[mealTypeIndex]);

    await tiffin.save();

    res.status(200).json({
      message: "Meal type updated successfully.",
      tiffin,
      updatedMealType: tiffin.menu.mealTypes[mealTypeIndex],
      appliedPlans: tiffin.menu.mealTypes[mealTypeIndex].specificPlans
    });

  } catch (error) {
    console.error("Error updating meal type:", error);
    res.status(500).json({ message: "Error updating meal type.", error });
  }
});

// Fetch all menu data
router.get("/menu/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    res.status(200).json(tiffin.menu);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu data.", error });
  }
});

// Delete a meal plan by ID
router.delete("/delete-plan/:planId/:email", async (req, res) => {
  const { planId, email } = req.params;

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    // Remove the plan
    tiffin.menu.plans = tiffin.menu.plans.filter(plan => plan._id.toString() !== planId);

    // Remove associated prices in meal types
    tiffin.menu.mealTypes.forEach(mealType => {
      delete mealType.prices[planId];
    });

    await tiffin.save();
    res.status(200).json({ message: "Plan deleted successfully.", tiffin });
  } catch (error) {
    res.status(500).json({ message: "Error deleting meal plan.", error });
  }
});

// Delete a meal type by ID
router.delete("/delete-meal-type/:mealTypeId/:email", async (req, res) => {
  const { mealTypeId, email } = req.params;

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    // Remove the meal type
    tiffin.menu.mealTypes = tiffin.menu.mealTypes.filter(
      mealType => mealType.mealTypeId.toString() !== mealTypeId
    );

    await tiffin.save();
    res.status(200).json({ message: "Meal type deleted successfully.", tiffin });
  } catch (error) {
    res.status(500).json({ message: "Error deleting meal type.", error });
  }
});

//Instructions Part

// Route to add a new instruction
router.post('/add-instruction/:email', async (req, res) => {
  const { title, details } = req.body;
  const { email } = req.params;

  if (!title || !details) {
    return res.status(400).json({ message: "Title and details are required." });
  }

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    tiffin.menu.instructions.push({
      title,
      details,
    });
    await tiffin.save();
    res.status(201).json({ message: "Instruction added successfully.", tiffin });
  } catch (error) {
    res.status(500).json({ message: "Error adding instruction.", error });
  }
});

// Route to edit an instruction
router.put('/edit-instruction/:id/:email', async (req, res) => {
  const { id, email } = req.params;
  const { title, details } = req.body;

  if (!title || !details) {
    return res.status(400).json({ message: "Title and details are required." });
  }

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    const instruction = tiffin.menu.instructions.id(id);
    if (!instruction) return res.status(404).json({ message: "Instruction not found." });

    instruction.title = title;
    instruction.details = details;

    await tiffin.save();
    res.status(200).json({ message: "Instruction updated successfully.", tiffin });
  } catch (error) {
    res.status(500).json({ message: "Error updating instruction.", error });
  }
});

// Delete an instruction by ID
router.delete("/delete-instruction/:id/:email", async (req, res) => {
  const { id, email } = req.params;

  try {
    const tiffin = await Tiffin.findOne({ ownerMail: email });
    if (!tiffin) return res.status(404).json({ message: "Tiffin not found." });

    // Find and remove the instruction
    tiffin.menu.instructions = tiffin.menu.instructions.filter(
      (instruction) => instruction._id.toString() !== id
    );

    await tiffin.save();
    res.status(200).json({ message: "Instruction deleted successfully.", tiffin });
  } catch (error) {
    console.error("Error deleting instruction:", error);
    res.status(500).json({ message: "Error deleting instruction.", error });
  }
});


module.exports = router;
