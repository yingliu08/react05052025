import React, { useState } from "react";

const ObjectPractice = () => {
  const [car, setCar] = useState({ year: 2025, name: "toyota", make: "japan" });
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleNameChange(event) {
    setCar((c) => ({ ...c, name: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  return (
    <div>
      <h3>
        Your favorite car is {car.year} {car.name} {car.make}
      </h3>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.name} onChange={handleNameChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
    </div>
  );
};

export default ObjectPractice;
