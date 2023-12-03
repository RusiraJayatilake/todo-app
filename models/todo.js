const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
});


const Todo = mongoose.model('todo-list-items', schema);

module.exports = Todo;