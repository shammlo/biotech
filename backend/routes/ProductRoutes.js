import express from "express";
import {
  createOrUpdateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateProduct)
  .delete(protect, checkRole(["admin", "author"]), deleteProduct);

router
  .route("/")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateProduct);

export default router;
