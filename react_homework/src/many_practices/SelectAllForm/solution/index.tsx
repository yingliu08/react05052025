import { useState } from "react";
import Checkbox from "./Checkbox";

interface Item {
  id: number;
  name: string;
  checked: boolean;
}

const itemsList: Item[] = [
  { id: 1, name: "item 1", checked: false },
  { id: 2, name: "item 2", checked: false },
  { id: 3, name: "item 3", checked: false },
  { id: 4, name: "item 4", checked: false },
];

export default function SelectAllFormSolution() {
  const [items, setItems] = useState<Item[]>(itemsList);

  // isCheckAll is a derived data from items
  // we do not need to create another state for isCheckAll
  const isCheckAll = items.every((item) => item.checked);

  const handleCheckItem = (id: number) => {
    // trying to calculate the new states: items
    const newItems = items.map((item) => {
      // look for the item we're trying to update
      if (item.id === id) {
        const newItem = { ...item };
        // // toggle the checked status
        newItem.checked = !newItem.checked;
        return newItem;
      } else {
        // if not the one we're looking for, don't do anything. just return the way it is
        return item;
      }
    });

    setItems(newItems);

    // const tempItems = [...items]; // we only made a shallow copy
    // const itemToUpdate = tempItems.find((item) => item.id === id);

    // itemToUpdate!.checked = !itemToUpdate!.checked;
    // setItems(tempItems);
  };

  const handleSelectAll = () => {
    setItems(
      items.map((item) => {
        return {
          ...item,
          checked: !isCheckAll,
        };
      })
    );
  };

  const itemsToDisplay = items
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(", ");

  return (
    <div>
      <h1>SelectAllForm</h1>
      <div>
        <h2>All selected item:</h2>
        <h3>{itemsToDisplay}</h3>

        <Checkbox
          onChange={handleSelectAll}
          checked={isCheckAll}
          label={"Select All"}
        />

        <div>
          {items.map((item) => {
            return (
              <Checkbox
                key={item.id}
                onChange={() => handleCheckItem(item.id)}
                checked={item.checked}
                label={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
