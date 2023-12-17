import React from 'react'
import { useState } from 'react'

function App() {
  const [userName , setUserName] = useState("");
  const [passWord , setPassWord] = useState("");

//   function handleUserName(e){
//     // console.log(e.target.value);
//     // setUsername(e.target.value)
    

//   }

function handleSumbit(e){
    e.preventDefault();
    console.log("Form Sumbitted")
    
}

  return (
    <>
    <h1>Forms</h1>
    
    <form onSubmit={handleSumbit}>
        <div>
        <label htmlFor="userName">Username: </label>
        <input type="text"  
        id="userName" 
        value={userName} 
        onChange={(e)=> setUserName(e.target.value)}
        />
        </div>

        <div>
            <label htmlFor="password">Password : </label>
            <input type="password" 
             id="password"
             value={passWord} 
             onChange={(e)=> setPassWord(e.target.value)}
             />
        </div>

        <button type="submit">Sumbit</button>
    </form>
    </>
  )
}

export default App