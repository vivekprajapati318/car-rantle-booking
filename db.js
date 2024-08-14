const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = 'mongodb+srv://vivekprajapati318:vivek000@mongoyt.bc0bbpp.mongodb.net/vivekprajapati318?retryWrites=true&w=majority&appName=mongoyt';

console.log('MongoDB URI:', mongoURI);

if (!mongoURI) {
  console.error('MongoDB URI is not defined in the environment variables');
  process.exit(1);
}

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;
    const collection = db.collection("cars");

    const fetchedData = await collection.find({}).toArray();

    if (fetchedData.length === 0) {
      console.log("No data found in the collection");
    } else {
      const collection2 = db.collection("cars_catagory");

      const foodCat = await collection2.find({}).toArray();
      
      global.cars = fetchedData;
      global.cars_catagory = foodCat;
      console.log(global.cars);
    }
  } catch (err) {
    console.error("Error connecting to MongoDB or fetching data:", err);
  }
};

module.exports = mongoDB;
