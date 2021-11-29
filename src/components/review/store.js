const Model = require('./model');

async function createReview(review){
    const newReview = new Model(review);
    return await newReview.save();
}

async function getReview(filterReview){
    return await Model.find(filterReview)
}

async function updateReview(data){
    const result = await Model.findOneAndUpdate(
        { _id: data._id },
        data,
        { new: true }
    );

    if(!result){
        return Promise.reject('Id not valid');
    }
    return result
}

async function deleteReview(id){
    const reviewDeleted = await Model.deleteOne( { _id: id } );
    if(!reviewDeleted){
        return Promise.reject('Id not valid');
    }
    return reviewDeleted
}

module.exports = {
    create: createReview,
    get: getReview,
    update: updateReview,
    delete: deleteReview,
}