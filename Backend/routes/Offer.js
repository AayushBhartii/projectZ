// routes/offers.js
const express = require('express');
const router = express.Router();
const Tiffin = require('../models/Tiffin');
const moment = require('moment');

// Get all offers for a tiffin
router.get('/:mail/offers', async (req, res) => {
    try {
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.mail });
        if (!tiffin) {
            return res.status(404).json({ message: 'tiffin not found' });
        }
        res.json(tiffin.offers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new offer
router.post('/:mail/offers', async (req, res) => {
    try {
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.mail });
        if (!tiffin) {
            return res.status(404).json({ message: 'tiffin not found' });
        }

        const {
            name,
            code,
            discount,
            scope,
            mealTypes,
            mealPlans,
            startDate,
            endDate,
            type
        } = req.body;

        // Validate dates
        if (moment(endDate).isBefore(startDate)) {
            return res.status(400).json({ message: 'End date must be after start date' });
        }

        // Create new offer object
        const newOffer = {
            name,
            code: code.toUpperCase(),
            discount,
            scope,
            type,
            mealTypes: scope === 'MealType-specific' ? mealTypes : [],
            mealPlans: scope === 'MealPlan-Specific' ? mealPlans : [],
            startDate,
            endDate,
            active: true,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };

        // Check for duplicate code
        const existingOffer = tiffin.offers.find(offer =>
            offer.code === newOffer.code
        );
        if (existingOffer) {
            return res.status(400).json({ message: 'Offer code already exists' });
        }

        tiffin.offers.push(newOffer);
        await tiffin.save();

        res.status(201).json(newOffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an offer
router.put('/:mail/offers/:offerId', async (req, res) => {
    try {
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.mail });
        if (!tiffin) {
            return res.status(404).json({ message: 'tiffin not found' });
        }

        const offerIndex = tiffin.offers.findIndex(
            offer => offer._id.toString() === req.params.offerId
        );

        if (offerIndex === -1) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        const {
            name,
            code,
            discount,
            scope,
            mealTypes,
            mealPlans,
            startDate,
            endDate,
            active,
            type
        } = req.body;

        // Validate dates
        if (moment(endDate).isBefore(startDate)) {
            return res.status(400).json({ message: 'End date must be after start date' });
        }

        // Check for duplicate code if code is being changed
        if (code !== tiffin.offers[offerIndex].code) {
            const existingOffer = tiffin.offers.find(offer =>
                offer.code === code.toUpperCase() &&
                offer._id.toString() !== req.params.offerId
            );
            if (existingOffer) {
                return res.status(400).json({ message: 'Offer code already exists' });
            }
        }

        // Update offer
        tiffin.offers[offerIndex] = {
            ...tiffin.offers[offerIndex].toObject(),
            name,
            code: code.toUpperCase(),
            discount,
            scope,
            type,
            mealTypes: scope === 'MealType-specific' ? mealTypes : [],
            mealPlans: scope === 'MealPlan-Specific' ? mealPlans : [],
            startDate,
            endDate,
            active,
            updatedAt: Date.now()
        };

        await tiffin.save();
        res.json(tiffin.offers[offerIndex]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an offer
router.delete('/:mail/offers/:offerId', async (req, res) => {
    try {
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.mail });
        if (!tiffin) {
            return res.status(404).json({ message: 'tiffin not found' });
        }

        const offerIndex = tiffin.offers.findIndex(
            offer => offer._id.toString() === req.params.offerId
        );

        if (offerIndex === -1) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        tiffin.offers.splice(offerIndex, 1);
        await tiffin.save();

        res.json({ message: 'Offer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/:mail/offers/update-status', async (req, res) => {
    try {
        const tiffin = await Tiffin.findOne({ ownerMail: req.params.mail });
        if (!tiffin) {
            return res.status(404).json({ message: 'Tiffin not found' });
        }

        const currentDate = moment();

        // Update each offer's active status
        tiffin.offers.forEach(offer => {
            const startDate = moment(offer.startDate);
            const endDate = moment(offer.endDate);

            // Check if today's date is within the offer's start and end date
            offer.active = currentDate.isBetween(startDate, endDate, null, '[]');
        });

        await tiffin.save();
        res.json({ message: 'Offer statuses updated successfully', offers: tiffin.offers });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// // Toggle offer active status
// router.patch('/:mail/offers/:offerId/toggle', async (req, res) => {
//     try {
//         const tiffin = await Tiffin.findOne({ ownerMail: req.params.mail });
//         if (!tiffin) {
//             return res.status(404).json({ message: 'tiffin not found' });
//         }

//         const offer = tiffin.offers.id(req.params.offerId);
//         if (!offer) {
//             return res.status(404).json({ message: 'Offer not found' });
//         }

//         offer.active = !offer.active;
//         offer.updatedAt = Date.now();

//         await tiffin.save();
//         res.json(offer);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

module.exports = router;