import React from "react";
const Counter = ({
  count,
  incrementHandler,
  decrementHandler,
  resetHandler,
}) => {
  return (
    <div style={{width:"300px",margin:"auto",marginTop:"20px;",backgroundColor:"black",color:"white",padding:"20px"}}>
      <h1>Counter App</h1>
      <h4>Count:{count}</h4>
      <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
      </div>
      
    </div>
  );
};

export default Counter;
