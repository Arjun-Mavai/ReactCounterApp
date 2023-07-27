import React, { useState } from "react";

export default function MyfavoriteColor() {
  const [color, setColor] = useState(null);

  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("purple")}>purple</button>
    </>
  );
}
