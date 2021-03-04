import React, { useState } from "react";
import Button from "./Button";

import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const descreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>{count}</h2>
      <div className="flex buttons">
        <Button func={increaseCount} text="Increase No" />
        <Button func={descreaseCount} text="Descrease No" />
        <Button func={resetCount} text="Reset No" />
      </div>
    </div>
  );
};

export default App;
