require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const jsonProducts = require('./products.json');

const db = process.env.DB.replace('<password>', process.env.DB_PASS);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB!');
    addToDB();
    console.log('Success!');
    process.exit(0);
  });

addToDB = async () => {
  await Product.deleteMany();
  await Product.create(jsonProducts);
};
