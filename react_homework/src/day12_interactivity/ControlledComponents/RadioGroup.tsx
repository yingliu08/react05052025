import { useState } from "react";
export default function RadioGroup() {
  const [age, setAge] = useState("");
  function handleSetAge(e: React.ChangeEvent<HTMLSelectElement>) {
    setAge(e.target.value);
  }
  return (
    <div>
      RadioGroup
      <select onChange={handleSetAge}>
        <option value="Ten">Ten</option>
        <option value="Twenty">Twenty</option>
        <option value="Thirty">Thirty</option>
      </select>
    </div>
  );
}
