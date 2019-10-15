import React from 'react';

import './App.css';

// Import Todos Provider
import { TodosProvider } from './context/todosContext';

// Import Components
import TodoNav from './components/layouts/TodoNav';
import TodoList from './components/layouts/TodoList';
import AddTodo from './components/layouts/AddTodo';

function App() {
  return (
      <TodosProvider>
        <div className='app'>
          <div className='todo-list'>
            <TodoNav />
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </TodosProvider>
  );
}

export default App;
