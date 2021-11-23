const Model = require('./model');

async function createQuestion(question){
    const newQuestion = new Model(question);
    return await newQuestion.save();
}

async function getQuestion(filterQuestion){
    let filter = {};
    if(filterQuestion){
        filter = { _id: filterQuestion };
    }
    return await Model.find(filter)
}

async function updateQuestion(data){
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

async function deleteQuestion(id){
    const questionDeleted = await Model.deleteOne( { _id: id } );
    if(!questionDeleted){
        return Promise.reject('Id not valid');
    }
    return questionDeleted
}

module.exports = {
    create: createQuestion,
    get: getQuestion,
    update: updateQuestion,
    delete: deleteQuestion,
}