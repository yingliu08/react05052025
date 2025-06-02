import { useState } from "react";

export default function useToggle<T>(values: T[]): [T, () => void] {
  const [index, setIndex] = useState(0);
  function toggle() {
    setIndex((prevIndex) => (prevIndex + 1) % values.length);
  }
  return [values[index], toggle];
}
