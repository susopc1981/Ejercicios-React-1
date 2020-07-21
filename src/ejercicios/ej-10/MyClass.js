import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ipAddress: "..." };
  }

  getIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org/pepe/?format=json");
      const data = await response.json();
      return data.id;
    } catch {
      return "Error";
    }
  };

  async componentDidMount() {
    const data = await this.getIp();
    this.setState({ ipAddress: data });
  }

  // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

  render() {
    return <h1>Mi ip es {this.state.ipAddress}</h1>;
  }
}

export default MyClass;
