const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    publication: {
        type: Schema.ObjectId,
        required: true,
        ref: 'Publication'
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

reviewSchema.pre('find', function(){
    this.populate('publication');
});

reviewSchema.post('findOneAndUpdate', function(doc, next){
    doc.populate('publication').then( () => next() );
});

const model = mongoose.model('Review', reviewSchema);
module.exports = model;