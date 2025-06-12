import ComponentA from "./ComponentA";
import { useState } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  console.log("parent render");

  return (
    <div>
      <h2>Performance Notes</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        parent count: {count}
      </button>
      <ComponentA />
    </div>
  );
}
