import React, { useContext, useState } from "react";
import ContextUsers from "../ContextData/ContextUsers";
import { ContextDblClick } from "../ContextData/ContextDblClick";

function UserData(props) {
  const [showData, setShowData] = useState(false);
  const user = useContext(ContextUsers);
  const fn = useContext(ContextDblClick);
  const data = user.find((value) => value.id === props.data.userId);
  function HandleOnClickUser() {
    if (!showData) {
      setShowData(true);
      return;
    }
    setShowData(false);
  }
  function HandleDblClickUser(id) {
    fn(id);
    setShowData(false);
  }
  if (data) {
    return (
      <>
        <h2
          onClick={HandleOnClickUser}
          onDoubleClick={() => HandleDblClickUser(data.id)}
        >
          {data.name}
        </h2>
        {showData ? (
          <div className="d-flex flex-column">
            <label>Nombre: {data.name}</label>
            <label>User name: {data.username}</label>
            <label>E-mail: {data.email}</label>
            <label>Website: {data.website}</label>
            <label>Phone: {data.phone}</label>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  } else return <></>;
}

export default UserData;
