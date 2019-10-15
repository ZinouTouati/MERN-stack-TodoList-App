import React, { useContext } from 'react';

import { TodosContext } from '../../context/todosContext';

const TodoNav = () => {
    const [todos] = useContext(TodosContext);

    return (
        <nav style={navStyle}>
            <h3>TodoList</h3>
            <p>Num Of Todos: <span style={{ fontWeight: 'bold' }}>{todos.length}</span></p>
        </nav>
    );
};

const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px'
};

export default TodoNav;