import React, { useState } from "react";

function StateObjectExample() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Abhay",
    lastName: "Sharma",
    email: "abhaysharma@gmail.com",
    phone: 8585848965,
    age: 23,
  });

  const increaseAge = () => {
    return setPerson((prev) => {
      return { ...prev, age: prev.age + 1 };
    });
  };
  return (
    <div>
      
      <p>FirstName: {person.firstName}</p>
      <p>lastName: {person.lastName}</p>
      <p>email: {person.email}</p>
      <p>phone: {person.phone}</p>
      <p>age: {person.age}</p>

      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default StateObjectExample;
