import { DATA_USER, DATA_POST } from "./constants";

async function getDataUsers() {
  const response = await fetch(DATA_USER);
  const data = await response.json();
  return data;
}

async function getDataPosts(id) {
  let apiUrl = DATA_POST;
  if (id) {
    apiUrl = DATA_POST + "?userId=" + id;
  }
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

export { getDataUsers, getDataPosts };
