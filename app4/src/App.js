import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <>
      <Header count={count} />
      <Body
        count={count}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        resetHandler={resetHandler}
      />

      <Footer count={count} />
    </>
  );
};

export default App;
