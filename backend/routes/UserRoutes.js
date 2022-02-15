import express from "express";
import {
  allUsers,
  authUser,
  changePassword,
  deleteUser,
  EditUser,
  registerUser,
  resetPasswordReq,
  resetPasswordSubmit,
} from "../controllers/UserControllers.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/")
  .post(protect, checkRole(["admin"]), registerUser)
  .get(protect, checkRole(["admin"]), allUsers);
router.route("/login").post(authUser);
router.route("/reset-password").post(resetPasswordReq);
router.route("/reset-password/:userId/:token").post(resetPasswordSubmit);
router.route("/change-password/:userId").put(protect, changePassword);
router
  .route("/:userId")
  .put(protect, EditUser)
  .delete(protect, checkRole(["admin"]), deleteUser);

export default router;
