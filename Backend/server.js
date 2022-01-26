const express = require("express");
const products = require("./Data/products");
const app = express();

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

app.listen(5050, console.log("Server running on port 5050"));
