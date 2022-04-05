import express from "express";
import {
  allProducts,
  createOrUpdateProduct,
  deleteProduct,
  fixDuplicates,
  productById,
  productsByBrandAndCategory,
  searchProducts,
} from "../controllers/ProductController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateProduct)
  .delete(protect, checkRole(["admin", "author"]), deleteProduct)
  .get(productById)
  .get(searchProducts);

router
  .route("/")
  .post(protect, checkRole(["admin", "author"]), createOrUpdateProduct)
  .get(allProducts);

router.route("/:brandId/:categoryId").get(productsByBrandAndCategory);

export default router;
