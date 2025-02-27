const Firm = require("../models/Firm");
const Vendor = require("../models/vendors");
const verifyToken = require("../middleware/verifyToken");
const multer = require("multer");
const path = require("path");
const { query } = require("express");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); //Folder where the images uploaded images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Generating a unique file name
  },
});
const upload = multer({ storage: storage });

// function to add a firm
const addFirm = async (req, res) => {
  //Just adding the required thinngs in the process , other data linke location , video can be stored later
  try {
    const { firmName, area, category, offer } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const vendor = await Vendor.findById(req.vendorId);
    if (!vendor) {
      res.status(404).json({ message: "Vendor Not Found" });
    }
    if (vendor.firm.length > 0) {
      res.status(400).json({ message: "One Vendor Can Have Only One Firm" });
    }
    const firm = new Firm({
      firmName,
      area,
      category,
      offer,
      image,
      vendor: vendor._id,
    });
    const savedFirm = await firm.save();
    const firmId = savedFirm._id;
    vendor.firm.push(savedFirm);
    await vendor.save();
    return res.status(200).json({ message: "Firm Added Successfully", firmId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getFirmById = async (req, res) => {
  try {
    const firmId = req.params.firmId;
    const firm = await Firm.findById(firmId).populate(
      "vendor",
      "vendorName vendorEmail"
    );

    if (!firm) {
      return res.status(404).json({ error: "Firm Not Found" });
    }

    res.status(200).json(firm);
  } catch (error) {
    console.error("Internal Server Error while fetching firm by ID: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateFirm = async (req, res) => {
  try {
    const { firmId } = req.params;
    const updatedData = req.body;

    // Check if an image file is included in the request
    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedFirm = await Firm.findByIdAndUpdate(firmId, updatedData, {
      new: true,
    });
    if (!updatedFirm) {
      return res.status(404).json({ error: "Firm Not Found" });
    }

    res.status(200).json({ message: "Firm Updated Successfully", updatedFirm });
  } catch (error) {
    console.error("Internal Server Error while updating firm: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// function to search firm by firm name
const searchFirmByName = async (req, res) => {
  try {
    const { firmName } = req.query;
    if (!firmName) {
      return res
        .status(400)
        .json({ message: "Please provide a firmName to search." });
    }
    const firms = await Firm.find({
      firmName: { $regex: firmName, $options: "i" }, // Case-insensitive regex search
    });

    if (firms.length === 0) {
      return res
        .status(404)
        .json({ message: "No firms found matching the search criteria." });
    }

    res.status(200).json({ firms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// function to delete firm
const deleteFirmById = async (req, res) => {
  try {
    const firmId = req.params.firmId;
    const deletedFirm = await Firm.findByIdAndDelete(firmId);
    if (!deletedFirm) {
      return res.status(404).json({ error: "Firm Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// function to find veg resturants
const pureVegFirms = async (req, res) => {
  try {
    const firms = await Firm.find({
      category: { $size: 1, $all: ["veg"] },
    });

    if (firms.length === 0) {
      return res.status(404).json({ message: "No pure veg firms found." });
    }

    res.status(200).json({ firms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// function for filtering based on rating
const filterFirmsByRating = async (req, res) => {
  try {
    const { rating } = req.query;

    if (!rating) {
      return res
        .status(400)
        .json({ message: "Please select a rating filter." });
    }

    const ratingThreshold = parseFloat(rating);
    if (isNaN(ratingThreshold) || ![3.5, 4.0, 4.5].includes(ratingThreshold)) {
      return res.status(400).json({
        message: "Invalid rating option. Please select 3.5, 4.0, or 4.5.",
      });
    }
    const firms = await Firm.find({
      ratings: { $gte: ratingThreshold },
    });
    if (firms.length === 0) {
      return res
        .status(404)
        .json({ message: `No firms found with ratings ${ratingThreshold}+.` });
    }
    return res.status(200).json({ firms });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// function to fetch all resturants with offers
const filterFirmsWithOffers = async (req, res) => {
  try {
    const firms = await Firm.find({
      offer: { $exists: true, $ne: "" },
    });
    if (firms.length === 0) {
      return res.status(404).json({ message: "No firms with offers found." });
    }
    return res.status(200).json({ firms });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// filter based on cuisine selection
const filterFirmsByCuisines = async (req, res) => {
  try {
    const { cuisines } = req.query;
    if (!cuisines || cuisines.length === 0) {
      return res
        .status(400)
        .json({ message: "Please select at least one cuisine to filter." });
    }
    const cuisinesArray = Array.isArray(cuisines) ? cuisines : [cuisines];
    const firms = await Firm.find({
      cuisines: { $in: cuisinesArray },
    });

    if (firms.length === 0) {
      return res
        .status(404)
        .json({ message: "No firms found matching the selected cuisines." });
    }

    res.status(200).json({ firms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// filter based on dietary preferences
const filterFirmByDietary = async (req, res) => {
  try {
    const { dietary } = req.query;
    if (!dietary || dietary.length === 0) {
      return res
        .status(400)
        .json({ message: "Please select at least one dietary preference." });
    }
    const dietaryArray = Array.isArray(dietary) ? dietary : [dietary];
    const firms = await Firm.find({
      dietary: { $in: dietaryArray },
    });
    if (firms.length === 0) {
      return res.status(404).json({
        message: "No firms found matching the selected dietary preferences.",
      });
    }

    res.status(200).json({ firms });
  } catch (error) {
    console.error("Error in filterFirmByDietary:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// function to sort firms by popularity
const sortFirmsByPopularity = async (req, res) => {
  try {
    const { sortByPopularity } = req.query;

    let firms;
    if (sortByPopularity === "true") {
      firms = await Firm.find().sort({ popularity: -1 });
    } else {
      firms = await Firm.find();
    }
    if (firms.length === 0) {
      return res.status(404).json({ message: "No firms found." });
    }
    res.status(200).json({ firms });
  } catch (error) {
    console.error("Error in sortFirmsByPopularity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// all filters working together
const filterFirms = async (req, res) => {
  try {
    const {
      firmName,
      category,
      cuisines,
      dietary,
      minRating,
      sortByPopularity,
      offer,
      pureVeg,
    } = req.query;

    let filter = {};

    if (firmName) {
      filter.firmName = { $regex: firmName, $options: "i" };
    }

    if (category) {
      const categoryArray = Array.isArray(category) ? category : [category];
      filter.category = { $all: categoryArray };
    }
    if (cuisines) {
      const cuisineArray = Array.isArray(cuisines) ? cuisines : [cuisines];
      filter.cuisines = { $in: cuisineArray };
    }
    if (dietary) {
      const dietaryArray = Array.isArray(dietary) ? dietary : [dietary];
      filter.dietary = { $in: dietaryArray };
    }
    if (minRating) {
      filter.ratings = { $gte: parseFloat(minRating) };
    }

    if (offer === "true") {
      filter.offer = { $exists: true, $ne: "" };
    }

    if (pureVeg === "true") {
      filter.category = { $all: ["veg"] };
    }
    let sort = {};
    if (sortByPopularity === "true") {
      sort.popularity = -1;
    }
    const firms = await Firm.find(filter).sort(sort);

    if (firms.length === 0) {
      return res
        .status(404)
        .json({ message: "No firms match the selected filters." });
    }

    res.status(200).json({ firms });
  } catch (error) {
    console.error("Error in filterFirms:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addFirm: [upload.single("image"), addFirm],
  deleteFirmById,
  searchFirmByName,
  pureVegFirms,
  filterFirmsByRating,
  filterFirmsWithOffers,
  filterFirmsByCuisines,
  filterFirmByDietary,
  sortFirmsByPopularity,
  filterFirms,
  getFirmById,
  updateFirm,
};
