import React, { useState, useEffect } from "react";
// import { getDataPosts } from "./getDataApi";
import PostGrid from "./components/PostGrid";
import { getDataUsers, getDataPosts } from "./getDataApi";
import { ContextPosts } from "./ContextData/ContextPosts";
import ContexUsers from "./ContextData/ContextUsers";
// import { DATA_POST } from "./constants";

const App = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [dataPosts, setDataPosts] = useState([]);

  async function getData() {
    const data = await getDataPosts();
    setDataPosts(data);
    const users = await getDataUsers();
    setDataUsers(users);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <ContexUsers.Provider value={dataUsers}>
          <ContextPosts.Provider value={dataPosts}>
            <PostGrid />
          </ContextPosts.Provider>
        </ContexUsers.Provider>
      </div>
    </>
  );
};

export default App;
