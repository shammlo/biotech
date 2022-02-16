import Product from "../models/ProductModel.js";
import Brand from "../models/BrandModel.js";
import { productValidation } from "../utils/validations/ProductValidations.js";
import Category from "../models/CategoryModel.js";

// @desc Create Or update a product
// @route Post api/product/:id
// @access Private admin/author
const createOrUpdateProduct = async (req, res) => {
  const { valid, errors } = productValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const {
    nameKR,
    nameAR,
    brand,
    descriptionKR,
    descriptionAR,
    image,
    album,
    price,
    category,
    state,
  } = req.body;

  try {
    const data =
      (await Product.findOne({ _id: req.params.id })) || new Product({});

    data.album = [];
    data.category = [];

    data.nameKR = nameKR;
    data.nameAR = nameAR;
    data.brand = brand;
    data.descriptionKR = descriptionKR;
    data.descriptionAR = descriptionAR;
    data.image = image;
    data.album = album;
    data.price = price;
    data.category = category;
    data.state = state;

    const brandData = await Brand.findOne({ _id: brand });
    brandData.products.push(data._id);
    await brandData.save();

    category.forEach(async (c) => {
      const cateData = await Category.findOne({ _id: c });
      cateData.products.push(data._id);
      await cateData.save();
    });

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

export { createOrUpdateProduct };
