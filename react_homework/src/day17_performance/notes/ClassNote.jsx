import React, { useEffect, useState, useMemo } from "react";
import Child from "./Child";

export default function ClassNote() {
  const [count, setCount] = useState(0);
  //   const [person, setPerson] = useState({ name: "" });
  //   console.log(person.name);
  console.log("parent");
  const testObj = useMemo(() => {
    return {};
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <p>count: {count}</p>
      {/* <input
        type="text"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      /> */}
      <Child testObj={testObj} />
    </div>
  );
}
