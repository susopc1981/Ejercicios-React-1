import React, { useContext } from "react";
import { ContextPosts } from "../ContextData/ContextPosts";

function PostData(props) {
  return (
    <div>
      <h4>{props.data.title}</h4>
      <p>{props.data.body}</p>
    </div>
  );
}

export default PostData;
