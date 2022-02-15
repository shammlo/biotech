import express from "express";
import {
  authUser,
  registerUser,
  resetPasswordReq,
  resetPasswordSubmit,
} from "../controllers/UserControllers.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";
// import { protect, admin } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, checkRole("admin"), registerUser);
router.route("/login").post(authUser);
router.route("/reset-password").post(resetPasswordReq);
router.route("/reset-password/:userId/:token").post(resetPasswordSubmit);
//   .get(protect, admin, allUsers);
// router.route("/login").post(authUser);
// router.route("/:id").delete(protect, admin, deleteUser);

export default router;
