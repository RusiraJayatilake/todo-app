const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async(req, res) => {
  try{
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add a new Todo
router.post('/addItems', async (req, res) => {
  const { title } = req.body;

  // Create a new Todo
  const newTodo = new Todo({
    title,
  });

  try {
    // Save the Todo to the database
    const savedTodo = await newTodo.save();

    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;