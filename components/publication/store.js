const Model = require('./model');

async function createPublication(publication){
    const newPublication = new Model(publication);
    return await newPublication.save();
}

async function getPublication(filterPublication){
    let filter = {};
    if(filterPublication){
        filter = { _id: filterPublication };
    }
    return await Model.find(filter)
}

async function updatePublication(data){
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

async function deletePublication(id){
    const publicationDeleted = await Model.deleteOne( { _id: id } );
    if(!publicationDeleted){
        return Promise.reject('Id not valid');
    }
    return publicationDeleted
}

module.exports = {
    create: createPublication,
    get: getPublication,
    update: updatePublication,
    delete: deletePublication,
}