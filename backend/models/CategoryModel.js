import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    nameKR: {
      type: String,
      required: true,
    },
    nameAR: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("category", categorySchema);

export default Category;
