const catchAsync = require('../middleware/catchAsync');
const Product = require('../models/productModel');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).send({ quantity: products.length, products });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).send({ product });
});
