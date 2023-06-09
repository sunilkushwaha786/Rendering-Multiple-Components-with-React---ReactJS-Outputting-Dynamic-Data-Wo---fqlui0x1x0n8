import React, { useState } from "react";

const [count, setCount] = useState(0);

const incrementHandler = ()=>{
    setCount(count+1);
}

const decrementHandler=()=>{
    setCount(count -1);
}

const resethandler= ()=>{
    setCount(0);
}

const Counter = () => {
  return (
    <>
      <div id="data-ns-test">Counter opration</div>
    
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={resethandler}>reset</button>
      
    </>
  );
};

export default Counter;
