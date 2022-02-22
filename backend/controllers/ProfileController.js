import Profile from "../models/ProfileModel.js";
import User from "../models/userModel.js";

// @desc Create Or update a profile
// @route Post api/profile/:id
// @access Private
const createOrUpdateProfile = async (req, res) => {
  const { name, address, phoneNumber, image } = req.body;

  const userId = req.user.id;

  try {
    const data = (await Profile.findOne({ user: userId })) || new Profile({});

    data.name = name;
    data.address = address;
    data.phoneNumber = phoneNumber;
    data.image = image;
    data.user = userId;

    const userData = await User.findOne({ _id: userId });
    userData.profile = data._id;
    await userData.save();

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

// @desc    get all profiles
// @route   GET api/profile
// @access  public
const allProfiles = async (req, res) => {
  let error = [];
  try {
    const profile = await Profile.find({});
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    get profile with products by id
// @route   GET api/profile/:id
// @access  public
const profileById = async (req, res) => {
  let error = [];
  try {
    const profile = await Profile.findById(req.params.id);
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    get current user profile
// @route   GET api/profile/me
// @access  protected
const profileCurrent = async (req, res) => {
  let error = [];
  const userId = req.user.id;
  try {
    const profile = await Profile.findOne({
      user: userId,
    });
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

export { createOrUpdateProfile, allProfiles, profileById, profileCurrent };
