import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      res.json({ error: "not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401);
    res.json({ error: "Not authorized" });
  }
};

const checkRole = (roles) => {
  return (req, res, next) => {
    let authorized = false;

    roles.forEach((role) => {
      req.user.roles.forEach((r) => {
        if (r === role) {
          authorized = true;
        }
      });
    });

    if (authorized) {
      next();
    } else {
      res.status(401);
      res.json({ error: "Not authorized" });
    }
  };
};

export { protect, checkRole };
