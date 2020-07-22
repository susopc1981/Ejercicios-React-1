import { DATA_USER, DATA_POST } from "./constants";

async function getDataUsers() {
  const response = await fetch(DATA_USER);
  const data = await response.json();
  return data;
}

async function getDataPosts() {
  const response = await fetch(DATA_POST);
  const data = await response.json();
  return data;
}

export { getDataUsers, getDataPosts };
