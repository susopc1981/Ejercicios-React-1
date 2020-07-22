import React, { useContext } from "react";
import UserData from "./UserData";
import PostData from "./PostData";
import { ContextPosts } from "../ContextData/ContextPosts";
import ContexUsers from "../ContextData/ContextUsers";

function Post() {
  const posts = useContext(ContextPosts);
  return posts.map((value) => {
    return (
      <div>
        <UserData data={value} />
        <PostData data={value} />
      </div>
    );
  });
}

export default Post;
