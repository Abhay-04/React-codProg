import { useState } from "react";
import "./App.css"
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Abhay", lastName: "Sharma", age: 23 },
    { id: 2, firstName: "Rohan", lastName: "Sharma", age: 25 },
    { id: 3, firstName: "krishna", lastName: "Sharma", age: 21 },
   
    
  ]);

  return (
    <>
      <Users users={users} />
    </>
  );
}

export default App;
