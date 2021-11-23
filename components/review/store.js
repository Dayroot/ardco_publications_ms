const Model = require('./model');

async function createReview(review){
    const newReview = new Model(review);
    return await newReview.save();
}

async function getReview(filterReview){
    return new Promise( (resolve, reject) => {
        let filter = {};
        if(filterReview){
            filter = { _id: filterReview };
        }
        Model.find( filter)
            .populate('products')
            .exec( (error, populated) => {
                if(error){
                    return reject(error);
                }
                resolve(populated)
            });
    })
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