import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    //  setCounter(counter+1);

    //update state using callback

    setCounter((prev) => {
      return prev + 1;
    });
  };
  const handleReset = () => {
    setCounter(0);
  };
  const handleDecrease = () => {
    // setCounter(counter-1);

    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}

export default Counter;
