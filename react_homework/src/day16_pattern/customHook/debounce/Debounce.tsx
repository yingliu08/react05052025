import useDebounce from "./useDebounce";
import { useState } from "react";

export default function Debounce() {
  const [inputText, setInputText] = useState("");
  const debounceText = useDebounce(inputText, 1000);

  return (
    <div>
      <h2>Debounce</h2>
      <input
        type="text"
        placeholder="enter name..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>{debounceText}</p>
    </div>
  );
}
