import { useMemo, useState } from "react";
export default function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  function handleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // Define background and text color based on theme
  const themeStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };
  return (
    <div style={themeStyles}>
      <p>useMemo practice</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={handleTheme}>toggle theme</button>
      <p>number:{doubleNumber}</p>
    </div>
  );
}

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i < 1000000; i += 1) {}
  return num * 2;
}
