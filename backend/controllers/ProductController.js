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

// @desc    remove a product
// @route   DELETE api/product/:id
// @access  private/admin/author
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      await Brand.updateMany(
        { _id: product.brand },
        { $pull: { products: product._id } }
      );

      product.category.forEach(async (c) => {
        await Category.updateMany(
          { _id: c },
          { $pull: { products: product._id } }
        );
      });

      res.json({ message: "product removed", product });
    } else {
      res.status(404);
      throw new Error("product not found");
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc    get all product
// @route   GET api/product
// @access  public
const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    get all product
// @route   GET api/product/:brandId/:categoryId
// @access  public
const productsByBrandAndCategory = async (req, res) => {
  try {
    const products = await Product.find({
      brand: req.params.brandId,
      category: req.params.categoryId,
    });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    get product by id
// @route   GET api/product/:id
// @access  public
const productById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id)
      .populate("brand")
      .populate("category");
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

// @desc    get search products
// @route   GET api/product?keyword=keyword
// @access  public
const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          $or: [
            {
              title: {
                $regex: req.query.keyword,
                $options: "i",
              },
            },
            {
              description: {
                $regex: req.query.keyword,
                $options: "i",
              },
            },
          ],
        }
      : {};

    const products = await Product.find({ ...keyword });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400);
    error.push({
      messageEn: "Server Error",
      messageAr: "Server Error",
      field: "general",
    });
    res.json(error);
  }
};

export {
  createOrUpdateProduct,
  deleteProduct,
  allProducts,
  productsByBrandAndCategory,
  productById,
  searchProducts,
};
