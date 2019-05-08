import React from "react";
import "./post.css";

const Post = props => {
  return (
    <div className="container">
      <div className="card">
        <p>{`id: ${props.id}`}</p>
        <p>{`name: ${props.name}`}</p>
        <p>{`age: ${props.age}`}</p>
        <p>{`email: ${props.email}`}</p>
      </div>
    </div>
  );
};

export default Post;
