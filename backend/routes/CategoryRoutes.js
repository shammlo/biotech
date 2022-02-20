import express from "express";
import {
  allCategory,
  createOrUpdateCategory,
} from "../controllers/CategoryController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateCategory);
router
  .route("/")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateCategory)
  .get(allCategory);

export default router;
