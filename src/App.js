import React, { useState } from "react";
import './App.css';

// importamos useState, el hook para crear un state en nuestro componente

export default function App() {
  const [count, setCount] = useState(0);
  console.log(setCount);
  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz click!</button>
    </div>
  );
}
