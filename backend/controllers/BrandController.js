import Brand from "../models/BrandModel.js";
import { brandValidation } from "../utils/validations/BrandValidations.js";

// @desc Create Or update a brand
// @route Post api/brand/:id
// @access Private admin/author
const createOrUpdateBrand = async (req, res) => {
  const { valid, errors } = brandValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { name, logo, description } = req.body;

  try {
    const data = (await Brand.findOne({ _id: req.params.id })) || new Brand({});

    data.name = name;
    data.logo = logo;
    data.description = description;

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

// @desc    remove a brand
// @route   DELETE api/brand/:id
// @access  private/admin/author
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    if (brand) {
      await brand.deleteOne();
      res.json({ message: "brand removed", brand });
    } else {
      res.status(404);
      throw new Error("brand not found");
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc    get all brand
// @route   GET api/brand
// @access  public
const allBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.json(brands);
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

// @desc    get brand with products by id
// @route   GET api/brand/:id
// @access  public
const brandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id).populate("products");
    res.json(brand);
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

export { createOrUpdateBrand, deleteBrand, allBrands, brandById };
