const mongoose=require('mongoose');
const todoSchema=mongoose.Schema({
    name:{ type:String,required:true,default:"hello"},
    age:{ type:String,required:true,default:"hello"},
    marks:{ type:String,required:true,default:"hello"},
})
module.exports=mongoose.model('todos',todoSchema);
