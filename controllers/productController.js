const catchAsync = require('../middleware/catchAsync');
const Product = require('../models/productModel');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query }; // creating a shallow copy
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((el) => delete queryObj[el]);
  const query = Product.find(queryObj);
  const products = await query;
  res.status(200).send({ quantity: products.length, products });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).send({ product });
});
