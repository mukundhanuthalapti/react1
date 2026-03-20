import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts";

const URL = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [data, setData] = useState([]);
  const [filteredata, setFilterData] = useState([]);
  const [inputtext, setInputText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get(URL);
      console.log(datas.data);
      setData(datas.data);
      const filterData = datas.data.filter((user) =>
        user.title.includes(inputtext),
      );
      setFilterData(filterData);
    };
    getData();
  }, [inputtext]);

  const onChangeEventHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <h2>Search Input</h2>
      <input type="text" onChange={onChangeEventHandler} />

      {filteredata.length > 0 ? (
        <Posts data={filteredata} />
      ) : (
        <h1>Data Not Found!</h1>
      )}
    </>
  );
};

export default App;
