import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getIp = async () => {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    return data.ip;
  };

  async componentDidMount() {
    const data = await this.getIp();
    this.setState({ ipAddress: data });
  }

  render() {
    return (
      <div>
        {this.state.ipAddress ? (
          <h1>Mi ip es {this.state.ipAddress}</h1>
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    );
  }
}

export default MyClass;
