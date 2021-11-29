const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res){
    controller.createQuestion(req.body)
        .then( data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, "The data is not valid", 400, e);
        });
});

router.get('/', function(req, res){
    const filterQuestion =  Object.keys(req.query).length == 0 ? null : req.query;
    controller.getQuestion(filterQuestion)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, "Unexpected error", 500, e);
        });
});


router.patch('/', function(req, res){
    controller.updateQuestion(req.body)
    .then( data => {
        response.success(req, res, data, 200);
    })
    .catch( e => {
        response.error(req, res, "Unexpected error", 500, e);
    });
});

router.delete('/:id', function(req, res){
    controller.deleteQuestion(req.params.id)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, "unexpected error", 500, e);
        });
});

module.exports = router;