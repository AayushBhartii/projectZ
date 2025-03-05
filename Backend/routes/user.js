// import express from 'express';

// import { UserModel } from '../../database/allModels.js';

// const Router = express.Router();

// /*
// Route     /
// Des       Get a user data
// Params    _userId
// Access    Public
// Method    GET
// */

// Router.get('/:_userId', async (req, res) => {
//   try {
//     const { _userId } = req.params;
//     const getUser = await UserModel.findById(_userId);
//     return res.json({ user: getUser });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// /*
// Route     /update
// Des       update a user data
// Params    _userId
// Body      userData
// Access    Public
// Method    put
// */

// Router.put('/update/:_userId', async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const { userData } = req.body;
//     const updateUserData = await UserModel.findByIdAndUpdate(
//       userId,
//       { $set: userData },
//       { new: true }
//     );
//     return res.json({ user: getUser });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// export default Router;
const express = require("express");

const UserModel = require("../models/user");

const Router = express.Router();

/*
Route     /
Des       Get a user data
Params    _userId
Access    Public
Method    GET  
*/

Router.get("/:_userId", async (req, res) => {
  try {
    const { _userId } = req.params;
    const getUser = await UserModel.findById(_userId);
    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /update
Des       update a user data
Params    _userId
Body      userData
Access    Public
Method    PUT  
*/

Router.put("/update/:_userId", async (req, res) => {
  try {
    const { _userId } = req.params;
    const { userData } = req.body;
    const updateUserData = await UserModel.findByIdAndUpdate(
      _userId,
      { $set: userData },
      { new: true }
    );
    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /address
Des       Add a new address to user data
Params    _userId
Body      addressData
Access    Public
Method    PUT  
*/

Router.put("api/address", async (req, res) => {
  try {
    const { _userId } = req.params;
    const { addressData } = req.body;

    if (!addressData || !addressData.detail || !addressData.for) {
      return res
        .status(400)
        .json({ error: "Address detail and type are required." });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      _userId,
      { $push: { address: addressData } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.json({
      message: "Address added successfully.",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports.Router;
