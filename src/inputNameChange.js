import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value); // when we type(event) in input field value goes to  e.target.value : this value is then given to setName
  }

  return (
    <>
      <div>
        <label>Name : </label>

        <input type="text" onChange={handleChange} />
        <p>Hello Arjun {name}</p>
      </div>
    </>
  );
}
