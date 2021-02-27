var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todolist');

// Create Schema
var todoschema = new mongoose.Schema({
  item: String
});

var TodoModel = mongoose.model("Todo", todoschema);



var urlencodedparser = bodyparser.urlencoded({ extended: false}); // ??


module.exports = function(app) {


  app.get('/',(request, response)=>{
    response.redirect('/todo');
  })

app.get('/todo', (request, response)=> {
  // Get todos from MongoDB
  TodoModel.find({}, (error, data)=>{
    if(error) throw error

    response.render("todo", {todos: data});
  });

});

app.post('/todo', urlencodedparser, (request, response)=>{
  var newTodo = TodoModel(request.body).save((error, data)=>{
    if(error) throw error

    response.json(data);
  
  });


});

app.delete('/todo/:item', (request, response)=>{
  // Delete todo from MongoDB
  TodoModel.find({item: request.params.item.replace(/\-/g, ' ')}).remove((error, data)=>{
    console.log(request.params.item.replace(/\-/g, ' '))
    if(error) throw error

    response.json(data);
  });
});

};
