const store = require('./store');

function createPublication(data) {
    return store.create(data);
}

function getPublication(filterPublication){
    return store.get(filterPublication)
}

function updatePublication(data){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data)
}

function deletePublication(id){
    if(!id){
        return Promise.reject('Invalid data');
    }
    return store.delete(id);
}

module.exports = {
    createPublication,
    getPublication,
    updatePublication,
    deletePublication,
}