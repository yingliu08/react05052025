import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  function handleStart() {
    if (!isRunning) {
      const id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000); // increase every 1 second
      setIntervalId(id);
      setIsRunning(true);
    }
  }
  function handlePause() {
    setIsRunning(false);
    clearInterval(intervalId);
  }
  function handleReset() {
    setCount(0);
    setIsRunning(false);
    clearInterval(intervalId);
  }
  return (
    <div>
      <h2> {count}</h2>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
