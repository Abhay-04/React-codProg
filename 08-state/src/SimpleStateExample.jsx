import React from 'react'
import { useState } from 'react';

function SimpleStateExample() {
    const [firstName , setFirstName]  = useState("Abhay")

    function changeFirstName(){
      console.log("component rendered");
      if (firstName === "Abhay"){
        setFirstName("Rohan")
      }  else {
        setFirstName("Abhay")
      } 
      
      
    }
    return (
      <>
        <h1>{firstName}</h1>
        <button onClick={changeFirstName}>Change Name</button>
      </>
    );
}

export default SimpleStateExample