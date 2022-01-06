/**
 * File: product.js
 * Author: Felipe Santos
 */

const mongoose = require('mongoose')
const schema = mongoose.Schema

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
  description: String
})

module.exports = mongoose.model('Product', ProductSchema)
