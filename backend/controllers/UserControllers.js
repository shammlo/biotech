import crypto from "crypto";

import generateToken from "../utils/GenerateToken.js";
import User from "../models/userModel.js";
import {
  loginValidator,
  registerValidator,
} from "../utils/validations/UserValidations.js";
import Reset from "../models/UserResetModel.js";
import sendEmail from "../utils/sendEmail.js";

// @desc    register a new user
// @route   POST api/users/
// @access  Private
const registerUser = async (req, res) => {
  const { valid, errors } = registerValidator(req.body);

  if (!valid) return res.status(400).json(errors);

  const { name, email, password, roles } = req.body;

  const error = [];

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      error.push({
        meesageKR: "ئەم ئیمەڵە بەکار هاتووە",
        messageAr: "هذا البريد الإلكتروني قيد الاستخدام بالفعل",
        field: "general",
      });
      res.json(error);
      return;
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      roles,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      error.push({
        meesageKR: "داتای بەکارهێنەر هەڵەیە",
        messageAr: "بيانات مستخدم غير صالحة",
        field: "general",
      });
      res.json(error);
    }
  } catch (err) {
    console.log(err);
    error.push({
      meesageKR: "کێشە بونی هەیە",
      messageAr: "حدث خطأ",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    auth user and get token
// @route   POST api/users/login
// @access  public
const authUser = async (req, res) => {
  const { valid, errors } = loginValidator(req.body);

  if (!valid) return res.status(400).json(errors);

  const { email, password } = req.body;
  let error = [];
  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      error.push({
        meesageKR: "ئیمەیڵ یان پاسۆردت هەڵەیە",
        messageAr: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
        field: "general",
      });
      res.json(error);
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      meesageKR: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    auth user and get token
// @route   POST api/users/reset-password
// @access  public
const resetPasswordReq = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await Reset.findOne({ userId: user._id });
    if (!token) {
      token = await new Reset({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const html = `<h1>Reset Password for Biotech:</h1><br /><h2>please click the link below</h2><br /> <a href=${`${process.env.BASE_URL}/reset-password/${user._id}/${token.token}`}>${
      process.env.BASE_URL
    }/reset-password/${user._id}/${token.token}</a>`;
    await sendEmail(user.email, "Password reset", html);

    res.send("password reset link sent to your email account");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};

// @desc    auth user and get token
// @route   POST api/users/reset-password/:userId/:token
// @access  public
const resetPasswordSubmit = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(400).send("invalid link or expired");

    const token = await Reset.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    user.password = req.body.password;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};

export { registerUser, authUser, resetPasswordReq, resetPasswordSubmit };
