const express = require('express');
const mongodb = require('mongoose');
const path = require('path');
const todosRoutes = require('./routes/routes');

const PORT = 1200;
const app = express();

// MongoDB Connection
mongodb.connect('mongodb://localhost:27017/todo-list').then(() => {
    console.log('MongoDB connected successfully');
  }).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Middleware
app.set("view engine", "ejs");
app.use('', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/', todosRoutes);


app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
})






