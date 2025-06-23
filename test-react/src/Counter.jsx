import { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  function handleDecrement() {
    setCount((prev) => prev - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <h1>Count:</h1>
      <h3 data-testid="count">{count}</h3>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default Counter;
