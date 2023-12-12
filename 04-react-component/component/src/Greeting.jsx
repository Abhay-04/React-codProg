import React from "react";
import FullName from "./FullName";

function Greeting(props) {
  return (
    <h1>
      <FullName {...props} />
    </h1>
  );
}

export default Greeting;
