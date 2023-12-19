import React from 'react'
import { useState } from 'react'

function RadioButtons() {
  
  const [gender , setGender] = useState("male")
  return (
    <div>
        <h3>RadioButtons</h3>
        <label htmlFor="male">Male</label>
        <input 
        type="radio" 
        checked = {gender === "male"}
        onChange={()=>{setGender("male")}} />
        <br />
        <br />
        <label htmlFor="female">Female</label>
        <input 
        type="radio" 
        checked = {gender === "female"}
        onChange={()=>{setGender("female")}} />
        <br />
        <br />
        <label htmlFor="others">Others</label>
        <input 
        type="radio" 
        checked = {gender==="others"}
        onChange={()=>{setGender("others")}} />

    </div>
  )
}

export default RadioButtons