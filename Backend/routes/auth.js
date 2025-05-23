const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const UserModel = require("../models/user");

const Router = express.Router();

// validation
const { ValidateSignin, ValidateSignup } = require("../validation/auth");

/*
   Router    /signup
   Des       singup with email and password
   Params    none
   Access    Public
   Method    POST
 */

Router.post("/signup", async (req, res) => {
  try {
    await ValidateSignup(req.body.credentials);

    // checking if user exist
    await UserModel.findByEmailAndPhone(req.body.credentials);

    // DB
    const newUser = await UserModel.create(req.body.credentials);

    //JWT auth token
    const token = newUser.generateJwtToken();
    console.log("New user created with token", token);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
  Route         /signin
  Descrip       Signin with email and password
  Params        None
  Access        Public
  Method        POST
 */

Router.post("/signin", async (req, res) => {
  try {
    await ValidateSignin(req.body.credentials);

    const user = await UserModel.findByEmailAndPassword(req.body.credentials);

    //JWT Auth Token
    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "Success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
 Route     /google
 Des       Google Signin
 Params    none
 Access    Public
 Method    GET
 */
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
 Route     /google/callback
 Des       Google Signin Callback
 Params    none
 Access    Public
 Method    GET
 */
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.redirect(
      `http://localhost:5173/google/${req.session.passport.user.token}`
    );
  }
);

module.exports = Router;
