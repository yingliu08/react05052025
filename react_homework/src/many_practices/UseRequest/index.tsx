// import "h8k-components";
import useRequest from "./useRequest";

import React from "react";

const request = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("test"), 5000);
  });
};

const request1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 500);
  });
};
const UseRequestApp = () => {
  const { data, loading, run, error } = useRequest(request1, {
    auto: true,
    ready: false,
  });

  return (
    <div className="App">
      <div className="fill-height layout-column justify-content-center align-items-center">
        <p data-testid="output">{data}</p>
        <p>{loading ? "true" : "false"}</p>
        <p>{error ? "error: true" : "error: false"}</p>
        <button data-testid="add-button" onClick={run}>
          Run
        </button>
      </div>
    </div>
  );
};

export default UseRequestApp;
