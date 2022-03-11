/**
 * 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
 * 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
 */

import React from "react";
import "./styles.css";

export default class App extends React.Component {
  lidarComClick1 = () => {
    console.log("deu certo 01");
  };
  lidarComClick2 = () => {
    console.log("deu certo 02");
  };
  lidarComClick3 = () => {
    console.log("deu certo 03");
  };

  render() {
    return (
      <>
        <button onClick={this.lidarComClick1}>01 - botão</button>
        <button onClick={this.lidarComClick2}>02 - botão</button>
        <button onClick={this.lidarComClick3}>03 - botão</button>
      </>
    );
  }
}
