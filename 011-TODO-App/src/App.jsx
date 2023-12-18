import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn JS", completed: true },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Learn Github", completed: true },
  ]);

  function addTodo(newTodo) {
    setTodos((prevState) => [...prevState, newTodo]);
  }

  function removeTodo(id) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }

  function toggleCompleted(id) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }
  return (
    <>
      <h1>TODO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
