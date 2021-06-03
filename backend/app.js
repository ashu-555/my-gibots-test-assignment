const express= require('express');
const app= express();
const Bodyparser=require('body-parser');
const mongoose =require('mongoose');
const cors=require('cors');
const todo=require('./todo')
const { restart } = require('nodemon');
const { error } = require('protractor');
const { json } = require('body-parser');

app.use(Bodyparser.json()); 

app.use(cors());




mongoose.connect('mongodb://localhost:27017/gibots',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("mongodb connected")
}).catch((error)=>{
console.log("mogodb not connected", error)
});

//,,,,,,,,,,,,,,,,,,,,,,,,,,,now creating Api/websevice for todo...............................


app.get('/todos',(req,res,next)=>{
let addition = 0;
todo.find().sort('age').then(docs=>{
   res.status(200).json({
    message:"todos fatched succesfully",
    todos:docs,
  })
  docs.forEach(doc=>{
     addition += parseInt(doc.marks)


  })
  console.log(addition);
}).catch(error=>{
        res.status(400).json({
      message:"todos not fatched sucessfully",
   })
})
})























///,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,todo cllback functionn,,,,,,,,,,,

app.post('/todos',(req,res,next)=>{

   let todoobj=new todo({
     name:req.body.name,
     age :req.body.age,
     marks:req.body.marks,

     })

    todoobj.save().then(()=>{
      res.status(200).json({ 
     message:"todos save succesfully"
     })
    }).catch(error=>{
      res.status(400).json({
        message:"todos not save successflly"
      })
    })
})
module.exports=app;