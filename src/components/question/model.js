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
    text: {
        type: String,
        required:true,
    },
    answer: {
        type: answerSchema,
        default: null,
    },
    status: {
        type: String,
        required:true,
        enum: {
            values: ['por responder', 'respondida'],
            message: '{VALUE} is not supported'
        }
    },
});

//Populate reference
questionSchema.post('save', function(doc, next){
    doc.populate('publication').then( () => next() );
});

questionSchema.pre('find', function(){
    this.populate('publication');
});

questionSchema.post('findOneAndUpdate', function(doc, next){
    doc.populate('publication').then( () => next() );
});


const model = mongoose.model('Question', questionSchema);
module.exports = model;