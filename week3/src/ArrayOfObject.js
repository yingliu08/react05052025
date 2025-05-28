import React from "react";
import { useState } from "react";

const ArrayOfObject = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carModel, setModel] = useState("");

  function handleAddCars() {
    const NewCar = { year: carYear, make: carMake, model: carModel };
    setCars(() => {
      return [...cars, NewCar];
    });
    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }
  function handleRemoveCars(index) {
    setCars(
      cars.filter((_, i) => {
        return i !== index;
      })
    );
  }
  function handleYearChanges(event) {
    setYear(event.target.value);
  }
  function handleMakeChanges(event) {
    setMake(event.target.value);
  }
  function handleModelChanges(event) {
    setModel(event.target.value);
  }
  return (
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car, index) => {
          return (
            <li key={index} onClick={() => handleRemoveCars(index)}>
              {car.year} {car.make} {car.model}
            </li>
          );
        })}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChanges} />{" "}
      <br />
      <input
        type="text"
        placeholder="enter car make"
        value={carMake}
        onChange={handleMakeChanges}
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        placeholder="enter car model"
        onChange={handleModelChanges}
      />{" "}
      <br />
      <button onClick={handleAddCars}>add</button>
    </div>
  );
};

export default ArrayOfObject;
