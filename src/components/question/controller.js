const store = require('./store');

function createQuestion(data) {
    if(!data.publication){
       return Promise.reject('Invalid data');
    }
    return store.create(data);
}

function getQuestion(filterQuestion){
    return store.get(filterQuestion)
}

function updateQuestion(data){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data)
}

function deleteQuestion(id){
    if(!id){
        return Promise.reject('Invalid data');
    }
    return store.delete(id);
}

module.exports = {
    createQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion,
}