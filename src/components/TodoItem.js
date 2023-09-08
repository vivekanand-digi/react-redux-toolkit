import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../todoSlice';
import '../index.css';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text: updatedText }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
         <button className="save" onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Update</button>
          <button onClick={handleRemove}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
