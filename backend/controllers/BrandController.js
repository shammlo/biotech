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

export { createOrUpdateBrand };
