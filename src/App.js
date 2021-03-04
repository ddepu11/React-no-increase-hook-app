import React, { useState } from "react";

import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase the Number</button>
    </div>
  );
};

export default App;
