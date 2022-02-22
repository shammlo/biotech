import express from "express";
import {
  allProfiles,
  createOrUpdateProfile,
  profileById,
  profileCurrent,
} from "../controllers/ProfileController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router.route("/").post(protect, createOrUpdateProfile).get(allProfiles);
router.route("/me").get(protect, profileCurrent);
router.route("/:id").get(profileById);

export default router;
