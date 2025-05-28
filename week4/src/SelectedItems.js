import { useState } from "react";

export default function SelectedItems() {
  const items = ["item1", "item2", "item3"];
  const [selected, setSelected] = useState([]);
  function handleItemChange(item) {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }
  function handleSelectedAll(e) {
    if (e.target.checked) {
      setSelected(items);
    } else {
      setSelected([]);
    }
  }
  return (
    <div>
      <h2 style={{ color: "blue" }}>All the selected items</h2>
      <label>
        <input
          type="checkbox"
          onChange={handleSelectedAll}
          checked={selected.length === items.length}
        />
        selected all <br />
      </label>

      {items.map((item) => {
        return (
          <label key={item}>
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => handleItemChange(item)}
            />
            {item} <br />
          </label>
        );
      })}
      {selected.length > 0 ? (
        <ul>
          {selected.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      ) : (
        "not selected any"
      )}
    </div>
  );
}
