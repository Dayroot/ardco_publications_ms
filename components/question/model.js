const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const answerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    text: {
        type: String,
        required:true,
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
    user: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required:true,
    },
    answer: {
        type: answerSchema,
        default: () => ({}),
    }
});



const model = mongoose.model('Question', questionSchema);
module.exports = model;