import React from 'react'

function User({firstName , lastName , age}) {
  return (
    <div className='user'>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
        
    </div>
  )
}

export default User