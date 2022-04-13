import express from "express";
import {
  allProfiles,
  createOrUpdateProfile,
  createOrUpdateProfileByAdmin,
  profileById,
  profileCurrent,
} from "../controllers/ProfileController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router.route("/").post(protect, createOrUpdateProfile).get(allProfiles);
router.route("/me").get(protect, profileCurrent);
router
  .route("/ua/:id")
  .post(protect, checkRole(["admin"]), createOrUpdateProfileByAdmin);
router.route("/:id").get(protect, profileCurrent);

export default router;
