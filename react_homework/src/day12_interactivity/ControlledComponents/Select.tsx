import React, { useState } from "react";

export default function Select() {
  const [gender, setGender] = useState<string>("Female");
  function handleGender(event: React.ChangeEvent<HTMLSelectElement>) {
    setGender(event.target.value);
  }
  return (
    <div>
      Select
      <select value={gender} onChange={handleGender}>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>
      <p>gender is: {gender}</p>
    </div>
  );
}
