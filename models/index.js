const path = require('path');
const mongoose = require('mongoose')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
console.log('here...', path.resolve(__dirname, '../.env'), process.env.MONGODB_URL)

const connectionString = process.env.MONGODB_URI;

const configOptions = {
};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Cities: require('./Cities'),
    Post: require('./Post')
}