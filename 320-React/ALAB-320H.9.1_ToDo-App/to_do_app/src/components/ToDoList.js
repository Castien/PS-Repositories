const TodoList = ({ todos, handleToggleComplete, handleDeleteTodo, handleEditTodo, handleSaveEdit }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleComplete(todo.id)}
          />
          {todo.editing ? (
            <input
              type="text"
              value={todo.title}
              onChange={(e) => handleSaveEdit(todo.id, e.target.value)}
            />
          ) : (
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          )}
          <button onClick={() => handleDeleteTodo(todo.id)} disabled={todo.completed}>
            Delete
          </button>
          {todo.editing ? (
            <button onClick={() => handleSaveEdit(todo.id, todo.title)}>Save</button>
          ) : (
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;