var express = require('express');
var todocontroller = require('./controllers/todocontroller.js');
const port =process.env.PORT||8000;
var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
todocontroller(app);

// Listen to port
app.listen(port);
console.log(`Your Listening to the port ${port}`)
