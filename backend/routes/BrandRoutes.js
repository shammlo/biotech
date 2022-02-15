import express from "express";
import {
  allBrands,
  brandById,
  createOrUpdateBrand,
  deleteBrand,
} from "../controllers/BrandController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateBrand)
  .delete(protect, checkRole(["admin", "author"]), deleteBrand)
  .get(brandById);
router
  .route("/")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateBrand)
  .get(allBrands);

export default router;
