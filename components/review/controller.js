const store = require('./store');

function createReview(data) {
    if(!data.publication){
       return Promise.reject('Invalid data');
    }
    return store.create(data);
}

function getReview(filterReview){
    return store.get(filterReview)
}

function updateReview(data){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data)
}

function deleteReview(id){
    if(!id){
        return Promise.reject('Invalid data');
    }
    return store.delete(id);
}

module.exports = {
    createReview,
    getReview,
    updateReview,
    deleteReview,
}