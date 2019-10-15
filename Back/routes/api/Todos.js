const express = require('express');

const router = express.Router();

// Todo Model
const Todo = require('../../models/Todo');

// @route   Get api/todos
// @desc    Get All Todos
// @access  Public
router.get('/', (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then(todos => res.json(todos))
});

// @route   Post api/todos
// @desc    Create Todo
// @access  Public
router.post('/', (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save()
        .then(todo => res.json(todo))
});

// @route   Update api/todos/:id
// @desc    Completed Todo
// @access  Public
router.put('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.update({ isCompleted: req.body.isCompleted }).then(() => res.json({ msg: 'Todo Updated'})))
        .catch(err => res.status(400).json({Msg: `No Item of The id of ${req.params.id}`}))
});


// @route   Delete api/todos/:id
// @desc    Delete Todo
// @access  Public
router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove().then(() => res.json({ Msg: 'Todo Deleted'})))
        .catch(err => res.status(400).json({Msg: `No Item of The id of ${req.params.id}`}))
});

module.exports = router