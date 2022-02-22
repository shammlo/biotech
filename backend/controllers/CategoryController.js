import Category from "../models/CategoryModel.js";
import { categoryValidation } from "../utils/validations/CategoryValidation.js";

// @desc Create Or update a category
// @route Post api/category/:id
// @access Private admin/author
const createOrUpdateCategory = async (req, res) => {
  const { valid, errors } = categoryValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { nameAR, nameKR } = req.body;

  try {
    const data =
      (await Category.findOne({ _id: req.params.id })) || new Category({});

    data.nameAR = nameAR;
    data.nameKR = nameKR;

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

// @desc    get all category
// @route   GET api/category
// @access  public
const allCategory = async (req, res) => {
  let error = [];
  try {
    const category = await Category.find({}).select("-products");
    res.json(category);
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

// @desc    get category with products by id
// @route   GET api/category/:id
// @access  public
const categoryById = async (req, res) => {
  let error = [];
  try {
    const category = await Category.findById(req.params.id).populate(
      "products"
    );
    res.json(category);
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

// @desc    remove a category
// @route   DELETE api/category/:id
// @access  private/admin/author
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (category) {
      await category.deleteOne();
      res.json({ message: "category removed", category });
    } else {
      res.status(404);
      throw new Error("category not found");
    }
  } catch (err) {
    console.log(err);
  }
};

export { createOrUpdateCategory, allCategory, categoryById, deleteCategory };
