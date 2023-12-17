import React from "react";

function Todo({ id, title, completed, toggleCompleted, removeTodo }) {
  return (
    <div
      style={{
        border: "2px solid #242424",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <p>title: {title}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          return toggleCompleted(id);
        }}
      />
      <p>id: {id}</p>
      <button onClick={()=>{
        return removeTodo(id)
      }}>Remove todo</button>
    </div>
  );
}

export default Todo;
