import React, { useState } from "react";

export default function Checkbox() {
  const [isChecked, setChecked] = useState<boolean>(false);
  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
  }
  return (
    <div>
      Checkbox
      <input type="checkbox" onChange={handleCheckbox} />
      <p>checkbox is: {isChecked ? "Checked" : "Not checked"}</p>
    </div>
  );
}
