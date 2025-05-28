import React from "react";
import { useState } from "react";

const ArrayPractice = () => {
  const [fruits, setFruit] = useState(["apple", "orange", "banana"]);
  //add to fruits
  function handleAddFruit() {
    const inputText = document.getElementById("inputId").value;
    document.getElementById("inputId").value = "";
    setFruit((prevFruits) => {
      return [...prevFruits, inputText];
    });
    //setFruit([...fruits, inputText]); //this will work too
  }
  //remove from fruits
  function handleRemoveFruit(index) {
    setFruit(
      fruits.filter((fruit, i) => {
        return i !== index;
      })
    );
  }
  return (
    <div>
      <h2>List of fruits</h2>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={index} onClick={() => handleRemoveFruit(index)}>
              {fruit}
            </li>
          );
        })}
      </ul>

      <input type="text" placeholder="Enter fruit" id="inputId" />
      <button onClick={handleAddFruit}>add</button>
    </div>
  );
};

export default ArrayPractice;
