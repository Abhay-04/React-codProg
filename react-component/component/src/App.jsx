import Greeting from "./Greeting";

function App() {
  return (
    <>
      <h1>
        <Greeting firstName = "Abhay" lastName = "Sharma" age = {23} />
        <Greeting firstName = "Rohan" lastName = "Sharma" age = {25}  />
        <Greeting firstName = "krishna" lastName = "Sharma" age = {21}  />
        <Greeting firstName = "kirti"  lastName = "azad" age = {22} />
        <Greeting firstName = "Sunny" lastName = "Sharma" age = {25} />
      </h1>
    </>
  );
}

export default App;
