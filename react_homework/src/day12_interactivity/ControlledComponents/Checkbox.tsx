import React, { useState } from "react";

export default function Checkbox() {
  const [checkedItem, setChecked] = useState(false);

  function handleChecked(event: any) {
    setChecked(event.target.checked);
  }
  return (
    <div>
      <h2>Checkbox</h2>
      <label>
        <input type="checkbox" checked={checkedItem} onChange={handleChecked} />
        Label
      </label>
      {/* <p>{checkedItem ? "checked" : "not checked"}</p> */}
    </div>
  );
}
