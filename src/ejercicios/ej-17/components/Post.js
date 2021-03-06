import React, { useContext } from "react";
import UserData from "./UserData";
import PostData from "./PostData";
import { ContextPosts } from "../ContextData/ContextPosts";

function Post() {
  const posts = useContext(ContextPosts);

  return posts.map((value) => {
    return (
      <div className="alert alert-success rounded m-1">
        <UserData data={value} />
        <PostData data={value} />
      </div>
    );
  });
}

export default Post;
