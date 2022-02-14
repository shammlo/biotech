import generateToken from "../utils/GenerateToken.js";
import User from "../models/userModel.js";
import {
  loginValidator,
  registerValidator,
} from "../utils/validations/UserValidations.js";

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

export { registerUser, authUser };
