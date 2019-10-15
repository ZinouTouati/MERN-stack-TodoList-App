import React, { useContext } from 'react';

import { TodosContext } from '../../context/todosContext';

import Todo from './Todo';

const TodoList = () => {
    const [todos] = useContext(TodosContext);
    return (
        <div>
            {todos.map(todo => (
                <Todo 
                    key={todo._id}
                    id={todo._id}
                    text={todo.text}
                    isCompleted={todo.isCompleted}
                />
            ))}
        </div>
    );
}

export default TodoList;
