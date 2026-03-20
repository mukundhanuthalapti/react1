import React from "react";
import Post from "./Post";

const Posts = ({ data }) => {
  return (
    <div className="user-cards">
      {data.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
