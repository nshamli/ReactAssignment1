import React from "react";
import { useState } from "react";

function CounterFunctional() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    if (count === 0) {
      alert("The number can not be less than " + count);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <h2>Assignment-2 Counter Application</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <h3>Count is {count}</h3>
    </div>
  );
}

export default CounterFunctional;
