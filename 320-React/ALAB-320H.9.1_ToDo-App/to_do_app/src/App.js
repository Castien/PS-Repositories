import React, { useReducer, useState } from 'react';
import todoList from './todoList';
import './App.css';



const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newtodo, setNewtodo] = useState('');

  const addtodo = () => {
    if (newtodo.trim() !== '') {
      dispatch({ type: 'ADD', payload: newtodo });
      setNewtodo('');
    }
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const deletetodo = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const edittodo = (id) => {
    dispatch({ type: 'EDIT', payload: id });
  };

  const saveEdit = (id, editedText) => {
    dispatch({ type: 'SAVE_EDIT', payload: { id, editedText } });
  };

  return (
    <div>
      <h1>todo List</h1>

      <div>
        <input
          type="text"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
        />
        <button onClick={addtodo}>Add todo</button>
      </div>

      <todoList
        todos={todos}
        handleToggleComplete={toggleComplete}
        handleDeletetodo={deletetodo}
        handleEdittodo={edittodo}
        handleSaveEdit={saveEdit}
      />
    </div>
  );
};

export default App;