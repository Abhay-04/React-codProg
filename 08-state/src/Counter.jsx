import React, { useState } from 'react'

function Counter() {
  
    const [counter , setCounter] = useState(0);

    const handleIncrease = () => {
         setCounter(counter+1);
    };
    // const handleReset = () => {
    //     setCounter(0)
    // };
    const handleDecrease = () => {
        setCounter(counter-1)
    };

    


  return (
    <>
    <div>{counter}</div>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={()=>{setCounter(0)}}>Reset</button>
    <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default Counter