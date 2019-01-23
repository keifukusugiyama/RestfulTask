//use models TaskSchema
const Task = require("./models");

//export to routes.js
module.exports = {

    //get /tasks 
    all: (req, res) => {
        //retrieve all the Tasks
        Task.find({})
            //if successful, respond with json file of result
            .then(results => res.json(results))
            //if there's error, respond with json file of error
            .catch(err => res.json(err))
    },

    //get /tasks/id 
    perId: (req, res) =>{
        //find Task with id provided on the route
        Task.findById(req.params.id)
        //if successful, respond with json file of result
        .then(result => res.json( result))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //post /tasks 
    new:(req, res)=>{
        //create new Task with returned json file on body
        Task.create(req.body)
        //if successful, respond with json file with newly created Task
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //put /tasks/:id 
    update:(req, res)=>{
        //find Task by id given on the route, update with json file on body
        Task.findByIdAndUpdate(req.params.id, req.body)
        //if successful, respond with json file with the updating Task
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //delete /tasks/:id 
    delete:(req, res)=>{
        //find Task by id given on the route, delete it
        Task.findByIdAndDelete(req.params.id)
        //if successful, respond with json file with the deleted Task
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    }

}