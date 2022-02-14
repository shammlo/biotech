import express from "express";
import dotenv from "dotenv";
import path from "path";

import userRoutes from "./routes/UserRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json({ limit: "3kb" }));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on("SIGINT", function () {
  server.close();
  // calling .shutdown allows your process to exit normally
  // toobusy.shutdown();
  process.exit();
});
