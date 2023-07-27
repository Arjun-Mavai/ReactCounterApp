import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function AddToDo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  function addTodo() {
    setTodos((t) => [...t, "New Todo of Arjun"]);
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <hr />
      <div>
        Count: {count}<span> </span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        
      </div>
      <hr />
       

    </div>
  );
}


