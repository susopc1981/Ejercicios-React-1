import React, { useContext } from "react";
import ContextUsers from "../ContextData/ContextUsers";
// import { ContextPosts } from "../ContextData/ContextPosts";

function UserData(props) {
  const user = useContext(ContextUsers);
  const data = user.find((value) => value.id === props.data.userId);
  if (data) {
    return <p>{data.name}</p>;
  } else return <></>;
}

export default UserData;
