const express = require('express');
const mongoose =require('mongoose');
const app = express (); 

const todosModel =require('./Models/todos');
 // list des taches : 

 // tache : lister todos :

app.get('/todos/lister',(req,res)=>{

    res.send("le corps  de fonction lister to dos");
})

// tache : ajouter todos
app.get('/todos/ajouter',(req,res)=>{


    const todosObj ={
        Content :"learn coding",
        date :"10-12-2
    }
    
    const todos= new todosModel(todosObj);
    
    todos.save();
    
    

res.send("Todos ajouter");
})

// tache : modifier todos
app.get('/todos/modifier',(req,res)=>{
    res.send("le corps du fonction modifer avec nodemon");
    })

// tache : supprimer todos
app.get('/todos/supprimer',(req,res)=>{
    res.send("le corps du fonction supprimer avec nodemon");
    })

    


//connexion a la base de données 

mongoose.connect('mongodb://127.0.0.1:27017/meanstack' ,{useNewUrlParser: true});


const db = mongoose.connection
db.once('open',()=>{
    console.log("database connected");
})

db.on('error',err=>{
    console.log('connection error :',err);
})


app.listen(3000,()=>{
    console.log("serveur demarer");
});