import express from "express";
import { authUser, registerUser } from "../controllers/UserControllers.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";
// import { protect, admin } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/").post(protect, checkRole("admin"), registerUser);
router.route("/login").post(authUser);
//   .get(protect, admin, allUsers);
// router.route("/login").post(authUser);
// router.route("/:id").delete(protect, admin, deleteUser);

export default router;
