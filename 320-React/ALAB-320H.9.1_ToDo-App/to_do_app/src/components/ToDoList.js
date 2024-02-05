const todoList = ({ todos, handleToggleComplete, handleDeletetodo, handleEdittodo, handleSaveEdit }) => {
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
          <button onClick={() => handleDeletetodo(todo.id)} disabled={todo.completed}>
            Delete
          </button>
          {todo.editing ? (
            <button onClick={() => handleSaveEdit(todo.id, todo.title)}>Save</button>
          ) : (
            <button onClick={() => handleEdittodo(todo.id)}>Edit</button>
          )}
        </li>
      ))}
    </ul>
  );
};