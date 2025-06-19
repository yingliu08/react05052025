import React from "react";

const Cars = () => {
  const cars = [
    { id: 1, year: 2022, name: "honda", model: "corana" },
    { id: 2, year: 2022, name: "nissan", model: "corana1" },
    { id: 3, year: 2021, name: "honda", model: "corana2" },
    { id: 4, year: 2024, name: "honda2", model: "corana" },
  ];
  return (
    <div>
      <ul>
        {cars.map((car) => {
          const { id, name, year, model } = car;
          const filteryear =
            year > 2022 ? name + " " + year + " " + model : null; //line21 + 22 + 25  = line26
          return (
            <li style={{ color: "blue" }} key={id}>
              {filteryear} <br />
              {year > 2022 ? `${name} ${year} ${model}` : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cars;
