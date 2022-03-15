import express from "express";
import {
  createOrUpdateCart,
  allOrders,
  cartById,
  deleteCart,
  changeStateOfOrder,
} from "../controllers/CartController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, createOrUpdateCart)
  .get(protect, cartById)
  .delete(deleteCart);
router
  .route("/:state/:id")
  .put(
    protect,
    checkRole(["admin", "author", "supervisor", "warehouse"]),
    changeStateOfOrder
  );

router
  .route("/")
  .post(protect, createOrUpdateCart)
  .get(
    protect,
    checkRole(["admin", "author", "supervisor", "warehouse"]),
    allOrders
  );

export default router;
