import React from "react";
import { useState } from "react";

const ShowHideText = () => {
  const [showText, setShowText] = useState(false);
  function handleShowText() {
    setShowText(!showText);
  }
  return (
    <div>
      <button onClick={handleShowText}>Show/Hide</button>
      {showText ? <h1>Hello World</h1> : null}
    </div>
  );
};

export default ShowHideText;
