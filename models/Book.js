const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    bookTitle : { type : String },
    authorName : { type : String },
    publisherName :{ type: String },
    language : { type: String },
    pricePerUnit : { type : Number },
    noOfPages : { type : Number },
    isbnNo : { type : String},
    originCountry : { type : String },
    bookImage : { type : String },
    createAt : Date,
    updatedAt : Date
})
BookSchema.plugin(timestamps, { index : true });
module.exports = mongoose.model('Book', BookSchema)

