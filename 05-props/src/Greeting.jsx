import React from 'react'

function Greeting({children , firstName , lastName , age="23"}) {
  return (
    <div>{children} {firstName} {lastName} {age}</div>
  )
}

export default Greeting