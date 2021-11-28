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

//Populate reference
questionSchema.post('save', function(doc, next){
    doc.populate('publication').then( () => next() );
});

questionSchema.post('find', function(doc, next){
    doc.populate('publication').then( () => next() );
});

questionSchema.post('findOneAndUpdate', function(doc, next){
    doc.populate('publication').then( () => next() );
});


const model = mongoose.model('Question', questionSchema);
module.exports = model;