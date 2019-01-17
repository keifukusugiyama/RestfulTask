//to use controller file
const controller = require("./controller");

//export for server.js
module.exports = function(app){
    //call on methods from controller for each route
    app
    .get('/api/tasks', controller.all)
    //show id
    .get('/api/tasks/:id', controller.perId)
    //create new
    .post('/api/tasks', controller.new)
    //update for id
    .put ('/api/tasks/:id', controller.update)
    //delete id
    .delete ('/api/tasks/:id', controller.delete)
}