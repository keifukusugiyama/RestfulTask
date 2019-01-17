//use mongoose 
var mongoose = require("mongoose");
//connect mongoose 
mongoose.connect('mongodb://localhost:27017/restfultaskapidb', (err)=>{
    //if there's error, log
    if(err){
        console.log(err)
    }
});

//create new TaskSchema table
var TaskSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String, default: ""},
    completed: {type:Boolean, default: false},
    //timestamp for createdat and updatedat
}, {timestamps:true})

//export the TaskSchema to controller.js
module.exports = mongoose.model('Task', TaskSchema);
