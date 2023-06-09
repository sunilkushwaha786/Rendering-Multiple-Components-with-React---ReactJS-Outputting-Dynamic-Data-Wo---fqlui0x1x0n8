import React, { Component, useState } from "react";
import "../styles/App.css";
// import {Counter} from "./Counter";

const App = () => {

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



  return (
    <>
      <div id="main"></div>

      <div id="data-ns-test" >Counter opration</div>
      <h5 id="">{count}</h5>

      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={resethandler}>reset</button>
    </>
  );
};

export default App;
