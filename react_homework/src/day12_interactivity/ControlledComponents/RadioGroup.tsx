import { useState } from "react";

export default function RadioGroup() {
  const [gender, setGender] = useState("Female");
  function handleSelected(event: any) {
    setGender(event.target.value);
  }
  return (
    <div>
      <h2>RadioGroup</h2>
      <label style={{ color: "blue", fontWeight: "Bold" }}>Gender</label>
      <br />
      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={handleSelected}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={handleSelected}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Other"
          checked={gender === "Other"}
          onChange={handleSelected}
        />
        Other
      </label>
    </div>
  );
}
