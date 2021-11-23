const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    publication: {
        type: Schema.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: String,
        required: true,
    },
    starts: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        default:""
    },

});

const model = mongoose.model('Review', reviewSchema);
module.exports = model;