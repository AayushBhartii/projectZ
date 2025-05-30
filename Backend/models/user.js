const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    address: [
      {
        detail: {
          type: String,
        },
        for: {
          type: String,
        },
      },
    ],
    phoneNumber: [
      {
        type: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
  //check whether user exist
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User Already Exists");
  }

  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  //check whether the email exists
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("User does not exist");

  //compare password
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    throw new Error("Invalid password");
  }
  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;

  //if password is modified
  if (!user.isModified("password")) return next();

  //generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    //hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      //assigning hashed password
      user.password = hash;
      return next();
    });
  });
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
