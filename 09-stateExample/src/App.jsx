import { useState } from "react";
import "./App.css"
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Abhay", lastName: "Sharma", age: 23 },
    { id: 2, firstName: "Rohan", lastName: "Sharma", age: 25 },
    { id: 3, firstName: "krishna", lastName: "Sharma", age: 21 },
   
    
  ]);

  function increaseAge(id){
    // console.log("Increase Age Called")
    // console.log(id);

    setUsers((prevState)=>{
      return prevState.map((user)=>{
        if (user.id === id){
          return {...user , age: user.age + 1}
        }else{
          return user
        }

      })
    })
  }

  const deleteUser = (id) => { 
    // console.log(id , "delete user")

    // setUsers(prevState =>{
    //   return prevState.filter((user)=>{
    //     return user.id !== id
    //   })
    // })

    //implicit function

   setUsers(prevState => prevState.filter(user => user.id !== id)) 

  }

  return (
    <>
      <h3 className="heading">State Examples</h3>
      <Users users={users} increaseAge = {increaseAge} deleteUser = {deleteUser} />
    </>
  );
}

export default App;
