import Greeting from "./Greeting"


function App() {
  
  return (
    <>
     <Greeting firstName = "Abhay" lastName = "Sharma"
     >Hello From Abhay</Greeting>
     <Greeting firstName = "Rohan" lastName = "Sharma"
     >Hello From Rohan</Greeting>
     <Greeting firstName = "Krishna" lastName = "Sharma" age={25}
     >Hello From Krishna</Greeting>
    </>
  )
}

export default App
