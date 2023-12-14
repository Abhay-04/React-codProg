import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function StateArrayExample() {
  const [fruits, setFruits] = useState(["Apple", "Mango", "Banana"]);

  const addFruit = () => {
    return setFruits((prev) => {
      return [...prev, "New Fruit"];
    });
  };
  return (
    <>
      {fruits.map((fruit) => {
        return <li key={uuid()}>{fruit}</li>;
      })}

      <button onClick={addFruit}>Add Fruit</button>
    </>
  );
}

export default StateArrayExample;
