const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [
          { id: state.length + 1, title: action.payload, completed: false },
          ...state,
        ];
      case 'TOGGLE_COMPLETE':
        return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
      case 'DELETE':
        return state.filter((todo) => todo.id !== action.payload);
      case 'EDIT':
        return state.map((todo) => (todo.id === action.payload ? { ...todo, editing: true } : todo));
      case 'SAVE_EDIT':
        return state.map((todo) => (todo.id === action.payload.id ? { ...todo, editing: false, title: action.payload.editedText.trim() } : todo));
      default:
        return state;
    }
  };