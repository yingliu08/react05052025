import React, { useState } from "react";

export default function Select() {
  const [age, setAge] = useState(" ");
  function handleAge(event: any) {
    setAge(event.target.value);
  }
  return (
    <div>
      <h2>Select & Option</h2>
      <label style={{ color: "blue", fontWeight: "bold" }}>Age</label>
      <br />
      <select onChange={handleAge}>
        <option value="">-- Select Age --</option>
        <option value="Ten">Ten</option>
        <option value="Twenty">Twenty</option>
        <option value="Thirty">Thirty</option>
      </select>
    </div>
  );
}
