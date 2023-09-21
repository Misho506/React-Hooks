import React, { useState } from "react";

const UseStateComponent = () => {
  const [stringVar, setStringVar] = useState(''); // String
  const [boolVar, setBoolVar] = useState(false); // bool
  const [numberVar, setNumberVar] = useState(0); // number
  const [arrayVar, setArrayVar] = useState([1]); // Array

  return (
    <div>
      <h2 >--------{'>'} UseSate examples {'<'}--------</h2>
      <div>
        <input placeholder="String State Value" onChange={(e) => setStringVar(e.target.value)} />
        <span>Shows the input value: {stringVar}</span>
      </div>
      <div>
        <input type="checkbox" id="scales" name="scales" onChange={(_) => setBoolVar(!boolVar)} />
        <label htmlFor="scales">{`${boolVar}`}</label>
      </div>
      <div>
        <input placeholder="String State Value" type="number" onChange={(e) => setNumberVar(e.target.value)} />
        <span>Shows the input value: {numberVar}</span>
      </div>
      <div>
        <button onClick={() => setArrayVar([...arrayVar, arrayVar[arrayVar.length - 1] + 1])} >Add value to Array </button>
        <span>Shows the input value: {JSON.stringify(arrayVar)}</span>
      </div>
      <hr style={{ border: '6px solid #008000a6' }} />
    </div>
  )
};

export default UseStateComponent;
