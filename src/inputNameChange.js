import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
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
