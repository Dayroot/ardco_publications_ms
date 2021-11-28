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
    userId: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        default:""
    },

});

//Populate reference
reviewSchema.post('save', function(doc, next){
    doc.populate('publication').then( () => next() );
});

reviewSchema.post('find', function(doc, next){
    doc.populate('publication').then( () => next() );
});

reviewSchema.post('findOneAndUpdate', function(doc, next){
    doc.populate('publication').then( () => next() );
});

const model = mongoose.model('Review', reviewSchema);
module.exports = model;