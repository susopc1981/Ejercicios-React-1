import React, { useState, useEffect } from "react";
import PostGrid from "./components/PostGrid";
import { getDataUsers, getDataPosts } from "./getDataApi";
import { ContextPosts } from "./ContextData/ContextPosts";
import ContexUsers from "./ContextData/ContextUsers";
import { ContextDblClick } from "./ContextData/ContextDblClick";

const App = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [dataPosts, setDataPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  async function getData(id) {
    const data = await getDataPosts(id);
    setDataPosts(data);
    const users = await getDataUsers();
    setDataUsers(users);
  }
  useEffect(() => {
    getData();
  }, []);

  function HandleOnDblClick(id) {
    if (!showAll) {
      const data = window.confirm("¿Filtrar posts por este nombre de usuario?");
      if (data) {
        getData(id);
        setShowAll(true);
      }
    }
  }

  function HandleOnClick() {
    getData();
    setShowAll(false);
  }

  return (
    <>
      <div>
        {showAll ? (
          <button className="text-center" onClick={HandleOnClick}>
            Mostrar Todos
          </button>
        ) : (
          <></>
        )}
        <ContextDblClick.Provider value={HandleOnDblClick}>
          <ContexUsers.Provider value={dataUsers}>
            <ContextPosts.Provider value={dataPosts}>
              <PostGrid />
            </ContextPosts.Provider>
          </ContexUsers.Provider>
        </ContextDblClick.Provider>
      </div>
    </>
  );
};

export default App;
