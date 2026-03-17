import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h4>Count:{count}</h4>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default App;
