import React from "react";

function ComponentA() {
  console.log("child A render");
  return <div></div>;
}

export default React.memo(ComponentA);
