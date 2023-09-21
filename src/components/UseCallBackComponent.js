import React, { useState, useCallback } from 'react'
import Todos from "./Todos";

function UseCallBack() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <h2 >--------{'>'} UseSate examples {'<'}--------</h2>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>

      <hr style={{ border: '6px solid #008000a6' }} />
    </>
  )
}

export default UseCallBack
