import Greeting from "./Greeting";

function handleClick(e) {
  console.log("You clicked");
  e.target.textContent = "Helloooo";
}

function sayName(firstName , lastName){
  console.log(firstName ,lastName)
}

// onClick only apply on ---> HTML Tags 
// onClick not apply on ---> Components

function App() {
  return (
    <>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=>{
        sayName("Abhay" , "Sharma")
        

      }}>click me 2</button>


      <Greeting click = {()=>{
        sayName("Abhay" , "Sharma")
      }}/>
    </>
  );
}

export default App;
