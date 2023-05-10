const AppError = require('../middleware/AppError');
const catchAsync = require('../middleware/catchAsync');
const Product = require('../models/productModel');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query }; // creating a shallow copy
  //filtering
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((el) => delete queryObj[el]);
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Product.find(JSON.parse(queryStr));
  // sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }
  // limiting fields
  if (req.query.fields) {
    const fields = req.query.fields.split(',').join(' ');
    query = query.select(fields);
  } else {
    query = query.select('-__v');
  }
  // pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);
  if (req.query.page) {
    const numProducts = await Product.countDocuments();
    if (skip >= numProducts) {
      next(new AppError('Out of Bounds', 404));
    }
  }

  const products = await query;
  res.status(200).send({ quantity: products.length, products });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).send({ product });
});
