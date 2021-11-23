const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const publicationSchema = new Schema({
    product: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    publication_date: {
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
        required: true,
    },
    
});

const model = mongoose.model('Publication', publicationSchema);
module.exports = model;