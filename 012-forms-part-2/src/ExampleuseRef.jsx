import React, { useRef } from 'react'

function ExampleuseRef() {

    const userNameRef = useRef()

    const handleSumbit = (e) => {
        
        e.preventDefault();
        const userName = userNameRef.current.value
        console.log(userName)
        
    }
  return (
    <form onSubmit={handleSumbit}>
        <label htmlFor="userName">UserName</label>
        <input ref={userNameRef} type="text" name="userName" id="userName" />
        <button type="submit">Sumbit</button>

    </form>
  )
}

export default ExampleuseRef