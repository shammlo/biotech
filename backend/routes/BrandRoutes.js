import express from "express";
import { createOrUpdateBrand } from "../controllers/BrandController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateBrand);
router
  .route("/")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateBrand);

export default router;
