import { useState } from "react";

function TodoItem({ todo, dispatch }) {
  const { title, completed } = todo;
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    dispatch({ type: "EDIT_TODO", payload: { id: todo.id, title: newTitle } });
    setShowEdit(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "TOGGLE_COMPLETED", payload: { id: todo.id } })}
      />
      {showEdit ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {title}
          </span>
          <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })}
            disabled={completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;