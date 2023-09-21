import { useState, useMemo } from "react";

const UseMemoComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2 >--------{'>'} UseMemo examples {'<'}--------</h2>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <hr style={{ border: '6px solid #008000a6' }} />
    </div>
  );
};

export default UseMemoComponent;
