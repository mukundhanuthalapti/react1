import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";

const URL = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [data, setData] = useState([]);
  const [filteredata, setFilterData] = useState([]);
  const [inputtext, setInputText] = useState("");
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterData(data);
      });
    const filterData = data.filter((user) => user.title.includes(inputtext));
    setFilterData(filterData);
  }, [inputtext]);

  const onChangeEventHandler = (e) => {
    setInputText(e.target.value);
  };
  if (!filteredata.length > 0) {
    return <h1>Data is Not Found</h1>;
  }
  return (
    <>
      <h2>Search Input</h2>
      <input type="text" onChange={onChangeEventHandler} />

      <Posts data={filteredata} />
      {/* <Posts data={data.filter((post)=>post.title.includes(inputtext))} /> */}
    </>
  );
};

export default App;
