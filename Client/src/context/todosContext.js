import React, { useEffect, useState, createContext } from 'react';
import Axios from 'axios';

// Init Context
export const TodosContext = createContext();

// Create The Context
export const TodosProvider = props => {
    // Create The State
    const [todos, setTodos] = useState([]);

    // Get Todos
    const getTodos = () => {
        Axios.get('http://localhost:5000/api/todos').then(
           res => setTodos(res.data)
       );
    }

    useEffect(() => {
        getTodos();
    });
    
    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    );
};