const AppError = require('../middleware/AppError');
const catchAsync = require('../middleware/catchAsync');
const Product = require('../models/productModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination();
  const products = await features.query;
  res.status(200).send({ quantity: products.length, products });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).send({ product });
});
