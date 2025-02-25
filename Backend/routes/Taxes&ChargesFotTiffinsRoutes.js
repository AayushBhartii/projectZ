const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Tiffin = require("../models/Tiffin");

// Define default taxes
const defaultTaxes = [
    { name: 'GST', rate: 5, isApplicable: true, isDefault: true },
    { name: 'Service Tax', rate: 2.5, isApplicable: false, isDefault: true },
    { name: 'Local Municipal Tax', rate: 1, isApplicable: false, isDefault: true }
];

// Add default taxes to new Tiffin documents
router.post("/add-taxes", async (req, res) => {
    try {
        const { email, name, rate, isApplicable } = req.body;
        if (!email || !name || rate == null) {
            return res.status(400).json({ error: "Email, name, and rate are required." });
        }

        let tiffin = await Tiffin.findOne({ ownerMail: email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        // Initialize taxes array if it doesn't exist
        if (!tiffin.tax) {
            tiffin.tax = [...defaultTaxes];
            await tiffin.save();
        }

        // Only allow adding new custom taxes
        const newTax = {
            name,
            rate,
            isApplicable: isApplicable ?? true,
            isDefault: false
        };

        tiffin.tax.push(newTax);
        await tiffin.save();

        res.status(201).json(newTax);
    } catch (error) {
        console.error("Add tax error:", error);
        res.status(500).json({ error: error.message });
    }
});

// Get tax details for a specific Tiffin
router.get("/get-taxes/:email", async (req, res) => {
    try {
        let tiffin = await Tiffin.findOne({ ownerMail: req.params.email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        // Initialize with default taxes if no taxes exist
        if (!tiffin.tax || tiffin.tax.length === 0) {
            tiffin.tax = [...defaultTaxes];
            await tiffin.save();
        }

        res.status(200).json(tiffin.tax);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update tax details for a specific Tiffin
router.put("/update-taxes/:id/:email", async (req, res) => {
    try {
        const { name, rate, isApplicable } = req.body;
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        const taxIndex = tiffin.tax.findIndex(tax => tax._id.toString() === req.params.id);
        if (taxIndex === -1) return res.status(404).json({ message: "Tax not found" });
        // const taxToEdit = tiffin.tax.find(tax => tax._id.toString() === req.params.id);
        // if (!taxToEdit) return res.status(404).json({ message: "Tax not found" });

        const existingTax = tiffin.tax[taxIndex];
        // console.log("existingTax:", existingTax.isDefault)

        // If the tax is a default, only update the 'isApplicable' field
        if (existingTax.isDefault) {
            tiffin.tax[taxIndex] = {
                ...existingTax,
                name: existingTax.name,
                rate: existingTax.rate,
                isDefault: existingTax.isDefault,
                isApplicable // Update only isApplicable for default taxes
            };
        } else {
            // For custom taxes, allow full updates but retain 'isDefault' as false
            tiffin.tax[taxIndex] = {
                ...existingTax,
                name,
                rate,
                isApplicable,
                isDefault: existingTax.isDefault
            };
        }

        await tiffin.save();
        res.status(200).json(tiffin.tax[taxIndex]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete tax details for a specific Tiffin
router.delete("/delete-taxes/:id/:email", async (req, res) => {
    try {
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        // Find the tax before deletion
        const taxToDelete = tiffin.tax.find(tax => tax._id.toString() === req.params.id);
        if (!taxToDelete) return res.status(404).json({ message: "Tax not found" });

        // Prevent deletion of default taxes
        if (taxToDelete.isDefault) {
            return res.status(403).json({ message: "Default taxes cannot be deleted" });
        }

        // Remove only non-default tax
        tiffin.tax = tiffin.tax.filter(tax => tax._id.toString() !== req.params.id);
        await tiffin.save();

        res.status(200).json({ message: "Tax deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//Charges Routes
const predefinedCharges = [
    { name: 'Service Fee', type: 'percentage', value: 5, isApplicable: true, isDefault: true },
    { name: 'Packaging Fee (Per 1 Meal Type)', type: 'flat', value: 10, isApplicable: true, isDefault: true },
    { name: 'Convenience Fee', type: 'percentage', value: 2, isApplicable: false, isDefault: true },
    { name: 'Handling Charges', type: 'flat', value: 15, isApplicable: true, isDefault: true },
];

router.post("/add-charges", async (req, res) => {
    try {
        const { email, name, value, isApplicable, type } = req.body;
        if (!email || !name || value == null || !type) {
            return res.status(400).json({ error: "Email, name, and rate,type are required." });
        }

        let tiffin = await Tiffin.findOne({ ownerMail: email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        // Initialize taxes array if it doesn't exist
        if (!tiffin.charges) {
            tiffin.charges = [...predefinedCharges];
            await tiffin.save();
        }
        // console.log("Predefined Charges:", predefinedCharges)

        // Only allow adding new custom taxes
        const newCharge = {
            name,
            value,
            type,
            isApplicable: isApplicable ?? true,
            isDefault: false
        };

        tiffin.charges.push(newCharge);
        await tiffin.save();

        res.status(201).json(newCharge);
    } catch (error) {
        console.error("Add charge error:", error);
        res.status(500).json({ error: error.message });
    }
});

// Get tax details for a specific Tiffin
router.get("/get-charges/:email", async (req, res) => {
    try {
        let tiffin = await Tiffin.findOne({ ownerMail: req.params.email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        // Initialize with default taxes if no taxes exist
        if (!tiffin.charges || tiffin.charges.length === 0) {
            tiffin.charges = [...predefinedCharges];
            await tiffin.save();
        }

        res.status(200).json(tiffin.charges);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update charges details for a specific Tiffin
router.put("/update-charges/:id/:email", async (req, res) => {
    try {
        const { name, value, isApplicable, type } = req.body;
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        const chargeIndex = tiffin.charges.findIndex(charge => charge._id.toString() === req.params.id);
        if (chargeIndex === -1) return res.status(404).json({ message: "Charge not found" });

        const existingCharge = tiffin.charges[chargeIndex];

        tiffin.charges[chargeIndex] = {
            ...existingCharge,
            name,
            value,
            type,
            isApplicable,
            isDefault: existingCharge.isDefault
        };
        // }

        await tiffin.save();
        res.status(200).json(tiffin.charges[chargeIndex]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete tax details for a specific Tiffin
router.delete("/delete-charges/:id/:email", async (req, res) => {
    try {
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.email });
        if (!tiffin) return res.status(404).json({ message: "Tiffin not found" });

        // Find the tax before deletion
        const chargeToDelete = tiffin.charges.find(charge => charge._id.toString() === req.params.id);
        if (!chargeToDelete) return res.status(404).json({ message: "Tax not found" });

        // Prevent deletion of default taxes
        if (chargeToDelete.isDefault) {
            return res.status(403).json({ message: "Default charges cannot be deleted" });
        }

        // Remove only non-default tax
        tiffin.charges = tiffin.charges.filter(charge => charge._id.toString() !== req.params.id);
        await tiffin.save();

        res.status(200).json({ message: "Tax deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Get all delivery ranges for a user
router.get("/delivery-ranges/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const tiffin = await Tiffin.findOne({ ownerMail: email });

        if (!tiffin) return res.status(404).json({ message: "Tiffin service not found" });

        const ranges = tiffin.deliveryCharge.sort((a, b) => a.minDistance - b.minDistance);
        res.json(ranges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new delivery range
router.post("/delivery-ranges", async (req, res) => {
    try {
        const { email, minDistance, maxDistance, charge } = req.body;
        const tiffin = await Tiffin.findOne({ ownerMail: email });

        if (!tiffin) return res.status(404).json({ message: "Tiffin service not found" });

        // Check for overlapping ranges
        const overlapping = tiffin.deliveryCharge.some(
            (range) => minDistance <= range.maxDistance && maxDistance >= range.minDistance
        );

        if (overlapping) {
            return res.status(400).json({ message: "This range overlaps with an existing delivery range" });
        }

        // Add the new range
        tiffin.deliveryCharge.push({ minDistance, maxDistance, charge, isActive: true });
        await tiffin.save();

        res.status(201).json(tiffin.deliveryCharge);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/delivery-ranges/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { email, minDistance, maxDistance, charge } = req.body;
        const tiffin = await Tiffin.findOne({ ownerMail: email });

        if (!tiffin) return res.status(404).json({ message: "Tiffin service not found" });

        const rangeIndex = tiffin.deliveryCharge.findIndex((range) => range._id.toString() === id);
        if (rangeIndex === -1) return res.status(404).json({ message: "Delivery range not found" });

        const existingRange = tiffin.deliveryCharge[rangeIndex];

        // If no changes are made, return the existing range without checking overlaps
        if (
            existingRange.minDistance === minDistance &&
            existingRange.maxDistance === maxDistance &&
            existingRange.charge === charge
        ) {
            return res.json(existingRange);
        }

        // Check for overlapping ranges, but ignore the currently edited range
        const overlapping = tiffin.deliveryCharge.some(
            (range) =>
                range._id.toString() !== id && // Dont Consider the current range
                minDistance < range.maxDistance &&
                maxDistance > range.minDistance
        );


        if (overlapping) {
            return res.status(400).json({ message: "This range overlaps with an existing delivery range" });
        }

        // Update the range
        tiffin.deliveryCharge[rangeIndex] = { _id: id, minDistance, maxDistance, charge, isActive: true };
        await tiffin.save();

        res.json(tiffin.deliveryCharge[rangeIndex]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a delivery range
router.delete("/delivery-ranges/:id/:email", async (req, res) => {
    try {
        const { id, email } = req.params;
        const tiffin = await Tiffin.findOne({ ownerMail: email });

        if (!tiffin) return res.status(404).json({ message: "Tiffin service not found" });

        tiffin.deliveryCharge = tiffin.deliveryCharge.filter((range) => range._id.toString() !== id);
        await tiffin.save();

        res.json({ message: "Delivery range deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Toggle delivery range status
router.patch("/delivery-ranges/:id/:email", async (req, res) => {
    try {
        const { id, email } = req.params;
        const { isActive } = req.body;
        const tiffin = await Tiffin.findOne({ ownerMail: email });

        if (!tiffin) return res.status(404).json({ message: "Tiffin service not found" });

        const range = tiffin.deliveryCharge.find((range) => range._id.toString() === id);
        if (!range) return res.status(404).json({ message: "Delivery range not found" });

        range.isActive = isActive;
        await tiffin.save();

        res.json(range);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Bulk create/update delivery ranges
router.post("/delivery-ranges/bulk", async (req, res) => {
    try {
        const { email, ranges } = req.body;
        const tiffin = await Tiffin.findOne({ ownerMail: email });

        if (!tiffin) return res.status(404).json({ message: "Tiffin service not found" });

        tiffin.deliveryCharge = ranges.map((range) => ({ ...range, isActive: true }));
        await tiffin.save();

        res.status(201).json(tiffin.deliveryCharge);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Calculate delivery fee for a given distance
router.get("/delivery-ranges/calculate/:email/:distance", async (req, res) => {
    try {
        const { email, distance } = req.params;
        const parsedDistance = parseFloat(distance);
        const tiffin = await Tiffin.findOne({ ownerMail: email });

        if (!tiffin) return res.status(404).json({ message: "Tiffin service not found" });

        const applicableRange = tiffin.deliveryCharge.find(
            (range) =>
                range.isActive &&
                range.minDistance <= parsedDistance &&
                range.maxDistance >= parsedDistance
        );

        if (!applicableRange) {
            return res.status(404).json({ message: "No delivery range found for this distance" });
        }

        res.json({ distance: parsedDistance, deliveryFee: applicableRange.charge });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;