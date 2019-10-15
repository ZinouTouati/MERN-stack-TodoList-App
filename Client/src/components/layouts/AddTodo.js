import React, { useState, useContext } from 'react';
import Axios from 'axios';

import { TodosContext } from '../../context/todosContext';


const AddTodo = () => {
    const [todos, setTodos] = useContext(TodosContext);
    const [text, setText] = useState('');

    // Create UpdateText Fun
    const updateText = e => {
        setText(e.target.value);
    };
    
    // Create AddTodo Fun 
    const addTodo = e => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/todos', { text, isCompleted: false }).then(
            res => setTodos([...todos, res.data])
        );
        setText('');
    }

    return (
        <form onSubmit={addTodo}>
            <input 
                type='text'
                className='input'
                placeholder='Add Todo'
                value={text}
                onChange={updateText}
            />
        </form>
    );
};

export default AddTodo;