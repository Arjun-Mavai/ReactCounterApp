import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function sandleClick() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleClick}>Increment</button> <span>--</span>
      <button onClick={sandleClick}>Decrement</button>
    </div>
  );
}
