const mongoose = require('mongoose');

// Init Schema
const Schema = mongoose.Schema;

// Create Schema
const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Todo = mongoose.model('todo', todoSchema);