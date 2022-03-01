const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    cityname: String,
    country: String,
    headerimg: String,
    content: String,
    posts: [{ type:mongoose.Types.ObjectId, ref: 'Post'}]
})

const Cities = mongoose.model('Cities', citySchema);

module.exports = Cities;

////testcopies for postman

    // "cityname": "String",
    // "country": "String",
    // "title": "String",
    // "body": "String",
    // "headerimg": "String",