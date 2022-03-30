import Cart from "../models/CartModel.js";
import Product from "../models/ProductModel.js";

// @desc Create Or update a category
// @route Post api/category/:id
// @access Private admin/author
const createOrUpdateCart = async (req, res) => {
  const { products, note } = req.body;

  try {
    let total = 0;
    await products.forEach(async (p) => {
      const data = await Product.findById(p.product);
      total += data.price * p.quantity;
      p.total = data.price * p.quantity;
    });
    const cart = (await Cart.findOne({ _id: req.params.id })) || new Cart({});

    cart.note = note;
    cart.products = products;
    cart.total = total;
    cart.userId = req.user.id;

    const result = await cart.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

// @desc    get all cart
// @route   GET api/cart
// @access  public
const allOrders = async (req, res) => {
  let error = [];
  try {
    const category = await Cart.find({}).populate("products.product");
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

// @desc    get cart with products by id
// @route   GET api/cart/:id
// @access  public
const cartById = async (req, res) => {
  let error = [];
  try {
    const cart = await Cart.findById(req.params.id).populate(
      "products.product"
    );
    res.json(cart);
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

// @route   DELETE api/cart/:id
// @access  private/admin/author
const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (cart) {
      await cart.deleteOne();
      res.json({ message: "cart removed", cart });
    } else {
      res.status(404);
      throw new Error("cart not found");
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc Create Or update a category
// @route Put api/cart/:state/:id
// @access Private admin/author
const changeStateOfOrder = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    cart.state = req.params.state;

    const result = await cart.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

// TODO
//get by user
//get by state
//update state by role

export {
  createOrUpdateCart,
  allOrders,
  cartById,
  deleteCart,
  changeStateOfOrder,
};
