import React from "react";

function Child({ testObj }) {
  console.log("child");

  return <div>child</div>;
}

export default React.memo(Child);
