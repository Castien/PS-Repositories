import { useReducer, useState } from "react";
import initialState from "./data/todosData";
import { todosReducer } from "./reducers/todosReducer";
import TodosList from './components/TodoList';

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: { title: newTodo } });
      setNewTodo("");
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      {/* Input for adding new todos */}
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <TodosList todos={todos} dispatch={dispatch} />
    </div>
  );
}

