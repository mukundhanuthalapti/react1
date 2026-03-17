import React from "react";
import Counter from "./Counter";
const Body = ({ count, incrementHandler, decrementHandler, resetHandler }) => {
  return (
    <Counter
      count={count}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
      resetHandler={resetHandler}
    />
  );
};

export default Body;
