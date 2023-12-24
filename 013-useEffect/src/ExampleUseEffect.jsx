import React, { useEffect, useState } from "react";

function ExampleUseEffect() {
  console.log("Component Rendered");

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Inside UseEffect");
  }, [counter1]);

  return (
    <div>
      <h1>Counter1 : {counter1}</h1>
      <button
        onClick={() => {
          setCounter1((prevValve) => prevValve + 1);
        }}
      >
        Increase
      </button>

      <h1>Counter2 :{counter2}</h1>
      <button
        onClick={() => {
          setCounter2((prevValve) => prevValve + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default ExampleUseEffect;
