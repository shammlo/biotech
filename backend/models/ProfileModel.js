import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("profile", profileSchema);

export default Profile;
