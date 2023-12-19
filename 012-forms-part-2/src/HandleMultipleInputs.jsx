import React, { useState } from "react";

function HandleMultipleInputs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    address: "",
  });

  const {firstName , lastName , userName , password , address} = formData;

  const handleSumbit = (e) => {
    console.log(formData)
    e.preventDefault()
    
  };

  const handleChange = (e) => {
    return setFormData(prevState => (
        
           {...prevState , [e.target.id]: e.target.value}
        
        ));
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="firstName">FirstName : </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="lastName">LastName : </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="userName">UserName : </label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={userName}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="password">Password : </label>
      <input
        type="password "
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="address">Address : </label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={handleChange}
      />
      <br />

      <button type="submit">Sumbit</button>
    </form>
  );
}

export default HandleMultipleInputs;
