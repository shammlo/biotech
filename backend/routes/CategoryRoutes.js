import express from "express";
import {
  allCategory,
  categoryById,
  createOrUpdateCategory,
  deleteCategory,
} from "../controllers/CategoryController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateCategory)
  .get(categoryById)
  .delete(protect, checkRole(["admin", "author"]), deleteCategory);
router
  .route("/")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateCategory)
  .get(allCategory);

export default router;
