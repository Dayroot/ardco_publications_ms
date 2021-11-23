
const publication = require('../components/publication/network');
const question = require('../components/question/network');
const review = require('../components/review/network');


const routes = function(server){
    
    server.use('/publication', publication);
    server.use('/question', question);
    server.use('/review', review);

}

module.exports = routes;