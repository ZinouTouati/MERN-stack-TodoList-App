import React, { useContext } from 'react';
import Axios from 'axios';

import '../../App.css';

import { TodosContext } from '../../context/todosContext';

const Todo = ({ id, text, isCompleted }) => {
    const [todos, setTodos] = useContext(TodosContext);

    // Create CompleteTodo Fun
    const completeTodo = id => {
        Axios.put(`http://localhost:5000/api/todos/${id}`, { isCompleted: !isCompleted }).then(
            res => setTodos(res.data)
        );
    }

    // Create RemeveTodo Fun
    const removeTodo = id => {
        Axios.delete(`http://localhost:5000/api/todos/${id}`).then(
            res => setTodos(todos.filter(todo => todo.id !== id))
        );
    }
   
    return (
        <div
            className='todo'
            style={{ textDecoration: isCompleted ? 'line-through' : ''}}
        >
            {text}
            <div>
                <button
                    onClick={() => completeTodo(id)}
                    style={Styles.completeBtn}
                >
                    Completed
                </button>
                <button
                    onClick={() => removeTodo(id)}
                    style={Styles.deletBtn}
                >
                    X
                </button>
            </div>
        </div>
    );
}

const Styles = {
    completeBtn: {
        backgroundColor: '#209cee',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 5px',
        marginRight: '5px'
    },
    deletBtn: {
        backgroundColor: 'red',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        padding: '8px 8px'
    }
};

export default Todo;