import React from 'react'

function User({firstName , lastName , age , id , increaseAge , deleteUser}) {

 
  return (
    
    <div className='user'>
        
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
        <p>id: {id}</p>
        <button onClick={()=>{
          increaseAge(id)
        }}>Increase Age</button>

        <button onClick={()=>{
          deleteUser(id)
        }}>Delete User</button>
        
    </div>
  )
}

export default User