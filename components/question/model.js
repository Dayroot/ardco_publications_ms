const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const answerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    text: {
        type: String,
    },

});

const questionSchema = new Schema({
    publication: {
        type: Schema.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required:true,
    },
    answer: {
        type: answerSchema,
        default: null,
    }
});



const model = mongoose.model('Question', questionSchema);
module.exports = model;