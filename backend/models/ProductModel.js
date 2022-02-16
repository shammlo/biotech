import mongoose from "mongoose";

const productModel = mongoose.Schema(
  {
    nameKR: {
      type: String,
      required: true,
    },
    nameAR: {
      type: String,
      required: true,
    },
    descriptionKR: {
      type: String,
    },
    descriptionAR: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    album: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brand",
      },
    ],
    state: {
      type: String,
      default: "active",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productModel);

export default Product;
