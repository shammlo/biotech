import express from "express";
import {
  createOrUpdateCart,
  allOrders,
  cartById,
  deleteCart,
  changeStateOfOrder,
  updateNote,
} from "../controllers/CartController.js";
import { checkRole, protect } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router
  .route("/:id")
  .post(protect, createOrUpdateCart)
  .get(protect, cartById)
  .delete(deleteCart);

router
  .route("/update-note/:id")
  .put(
    protect,
    checkRole(["admin", "author", "supervisor", "warehouse"]),
    updateNote
  );

router
  .route("/:state/:id")
  .put(
    protect,
    checkRole(["admin", "author", "collector", "sales", "acounting"]),
    changeStateOfOrder
  );

router
  .route("/")
  .post(protect, createOrUpdateCart)
  .get(
    protect,
    checkRole(["admin", "author", "collector", "sales", "acounting"]),
    allOrders
  );

export default router;
