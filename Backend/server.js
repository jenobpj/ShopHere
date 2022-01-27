import express from "express";
import dotenv from "dotenv";
import products from "./Data/products.js";
import connectDB from "./config/db.js";
const app = express();

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5050;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
