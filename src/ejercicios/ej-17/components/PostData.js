import React from "react";

function PostData(props) {
  return (
    <div>
      <h4 className="text-danger">{props.data.title}</h4>
      <p className="text-primary">{props.data.body}</p>
    </div>
  );
}

export default PostData;
