const mongoose = require('mongoose');
const app = require('./app');

const db = process.env.DB.replace('<password>', process.env.DB_PASS);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connected successfully');
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  });
