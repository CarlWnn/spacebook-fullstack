var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

var Post = require('./models/postModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// You will need to create 5 server routes
// These will define your API:

// 1) to handle getting all posts and their comments
// 2) to handle adding a post
// 3) to handle deleting a post
// 4) to handle adding a comment to a post
// 5) to handle deleting a comment from a post

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});

//1
app.get('/posts', function(request, response){
 Post.find( {} , function (error, data) {
    if(error) throw error
    else  response.send(data);
 })
});

//2- server route to add post 
app.post('/posts', function(req, res){
  //var postText = req.body.text;
  Post.create({ text:req.body.text, comments:[]}, function (error, data){
     if(error) throw error
     else  res.send(data);
  })
});
 
 //3- delete route 
app.delete('/posts/:id', function(req, res){
   var id= req.params.id;
   Post.findByIdAndRemove(id, function (error, data){
    if(error) {
      throw error
    }
    else {
      res.send(data);
    }
   });
});

