/**
 * File: product.js
 * Author: Felipe Santos
 */

const mongoose = require("mongoose");
const schema = mongoose.Schema;

/**
 * Product:
 * -> ID: int
 * -> Name: string
 * -> price: number
 * -> description: string
 */
const ProductSchema = new schema({
  name: String,
  price: Number,
  description: String,
});

const Product = mongoose.model("Product", ProductSchema);

const main = async () => {
  mongoose.connect("mongodb://localhost:27017/products", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const produ0 = new Product({
    name: "poduct_0",
    price: 22,
    description: "product_info",
  });

  const produ1 = new Product({
    name: "poduct_1",
    price: 22,
    description: "product_info",
  });

  const produ2 = new Product({
    name: "poduct_2",
    price: 22,
    description: "product_info",
  });

  await produ0.save();
  await produ1.save();
  await produ2.save();

  (async () => {
    const result = await Product.find();
    result.map((item) => console.log(item.name));
  })();
};

main();

module.exports = Product;
