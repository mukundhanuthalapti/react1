import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";

const URL = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [data, setData] = useState([]);
  const [inputtext, setInputText] = useState("");
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const onChangeEventHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <h2>{inputtext}</h2>
      {/* <input type="text" onChange={(e) => setInputText(e.target.value)} /> */}
      <input type="text" onChange={onChangeEventHandler} />
      <Posts data={data} />
    </>
  );
};

export default App;
