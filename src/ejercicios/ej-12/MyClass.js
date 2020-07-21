import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chuckFact: "..." };
  }

  getData = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data;
  };

  HandleOnClick = async () => {
    const data = await this.getData();
    this.setState({ chuckFact: data.value });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://1.bp.blogspot.com/-kx66K2UWZLA/UE2m_Ab5kOI/AAAAAAAABe8/WKVu3O4DgpI/s1600/Chuck.jpg"
          alt=""
          title=""
        />
        <button onClick={this.HandleOnClick}>Cargar frase</button>
        <h1>Chuck fact {this.state.chuckFact}</h1>
      </div>
    );
  }
}

export default MyClass;
