import React from "react";
import "./styles.css";

export default class App extends React.Component {
  lidarComClick = () => {
    console.log("deu certo");
  };
  render() {
    return <button onClick={this.lidarComClick}>Meu botão</button>;
  }
}
