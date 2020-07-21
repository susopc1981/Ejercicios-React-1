import React, { useState } from "react";

const MyComponent = () => {
  const [text, setText] = useState("");

  async function getData() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data.value;
  }

  async function HandleOnClick() {
    const data = await getData();
    setText(data);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg"
        alt=""
        title=""
      />
      <button onClick={HandleOnClick}>Cargar frase</button>
      <h1>Chuck fact: {text}</h1>
    </div>
  );
};

export default MyComponent;
