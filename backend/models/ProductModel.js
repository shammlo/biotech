import mongoose from "mongoose";

const productModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // logo: {
    //   type: String,
    //   required: true,
    // },
    // description: {
    //   type: String,
    // },
    // products: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "product",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productModel);

export default Product;
