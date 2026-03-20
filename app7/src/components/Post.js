import React from "react";

const Post = ({ post }) => {
  return (
    <div
      key={post.id}
      style={{
        width: "250px",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px",
        backgroundColor: "skyblue",
      }}
    >
      <h4>Id:{post.id}</h4>
      <h4>Title:{post.title}</h4>
      <h4>UserId:{post.userId}</h4>
      <p>Body:{post.body}</p>
    </div>
  );
};

export default Post;
