import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  //First Example
  useEffect(() => {
    alert(`First example of UseEffect.\nRunning the useEffect only ones`);
  }, []);

  // ----------------------------------------------

  // Second Example
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 1000) {
      setCount(count + 1);
    }
  });
  // ----------------------------------------------

  // Third Example
  const [isChange, setIstChange] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(Math.random());
  }, [isChange]);
  // ----------------------------------------------

  return (
    <div>
      <h2 >--------{'>'} UseEffect examples {'<'}--------</h2>
      {/* Second example */}
      <>
        <br />
        <br />
        <label>Count {count}, stop when count is equal to 1000</label>
      </>


      {/* Third example */}
      <>
        <br />
        <br />
        <hr />
        <span>This random number is setted using useEffect --{`>`} {number}</span>
        <button type="button" onClick={() => setIstChange(!isChange)}>Random number</button>
      </>
      <hr style={{ border: '6px solid #008000a6' }} />
    </div>
  )
};

export default UseEffectComponent;
