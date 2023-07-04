const mongoose = require("mongoose");
require('dotenv').config();
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
    // useUnifiedTopology: true,
    // useNewUrlParser: true
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((err) => {
      console.error('Error connecting to Mongo', err);
    });
};


module.exports = connectDatabase;