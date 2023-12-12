import User from "./User";

const users = [
  { id: 1, firstName: "Abhay", lastName: "Sharma" },
  { id: 2, firstName: "Rohan", lastName: "Sharma" },
  { id: 3, firstName: "Krishna", lastName: "Sharma" },
];

function App() {
  return (
    <>
      {/* {users.map((user)=>{
        return <User {...user} />
      })} */}


      {users.map((user)=> <User {...user} key={user.id} />)}
    </>
  );
}

export default App;
