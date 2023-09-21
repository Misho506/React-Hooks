import React, { useRef, useState } from 'react';

/* 
Can't contain part of the JSX code into another component, 
because the component lost the scope of the userRef hook.
*/

const UseRefComponent = ({ inputValue }) => {
  // First example
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert('Count ' + ref.current);
  }
  // ------------------ Finish --------------

  // Second Example
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  let secondsPassed = 0;

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  }

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  // ---------------- Finish ---------------

  // Third example
  const [value, setValue] = useState(inputValue);
  const inputRef = useRef();

  const clearInput = () => {
    console.log(inputRef.current.value);
    // if I don't use the inputRef I can't call the focus function.
    inputRef.current.focus();
    setValue('');
  };

  return (
    <div>
      <h2 >--------{'>'} UseRef examples {'<'}--------</h2>
      {/* First example */}
      <>
        <br />
        <br />
        <button onClick={handleClick}>
          Increase counter
        </button>
        <br />
        <span>The 'ref' object doesn't re-render the React Component, <br /> so this label does not show the real value </span>
        <span>Count: {ref.current}</span>
      </>


      {/* Second example */}
      <>
        <br />
        <br />
        <hr />
        <h3>Time passed: {secondsPassed.toFixed(3)}</h3>
        <button onClick={handleStart}>
          Start
        </button>
        <button onClick={handleStop}>
          Stop
        </button>
        <br />
        <br />
      </>


      {/* Third example */}
      <>
        <hr />
        <br />
        <br />
        <form>
          <input
            type="text"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type='button' onClick={clearInput}>clear input</button>
        </form>
        <br />
        <br />
      </>
      <hr style={{ border: '6px solid #008000a6' }} />
    </div>
  );
}

export default UseRefComponent;
