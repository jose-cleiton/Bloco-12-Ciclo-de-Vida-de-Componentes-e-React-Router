/**
 * 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
 * 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
 */

import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super();

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  lidarComClick1 = () => {
    console.log("deu certo 01");
    console.log(this);
  };
  lidarComClick2 = () => {
    console.log("deu certo 02");
  };
  lidarComClick3 = () => {
    console.log("deu certo 03");
  };

  render() {
    console.log(this);
    return (
      <>
        <button onClick={this.lidarComClick1}>01 - botão</button>
        <button onClick={this.lidarComClick2}>02 - botão</button>
        <button onClick={this.lidarComClick3}>03 - botão</button>
      </>
    );
  }
}
