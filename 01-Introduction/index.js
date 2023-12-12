const rootElement = document.getElementById("root");

// const el = React.createElement("h1" , null , "Hello World");



// function el(){
//     return React.createElement("h1" , null , "Hello World")
// }


function HelloWorld(){

    return <h1>Hello World</h1>;

}


ReactDOM.createRoot(rootElement).render(<HelloWorld/>);




