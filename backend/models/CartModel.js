import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    total: {
      type: Number,
    },
    state: {
      type: String,
      default: "created",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
        quantity: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
