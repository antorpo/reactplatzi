/* SIN REACT:
const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');
container.appendChild(element); */

import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");
const nombre = "Antonio";

const jsx = (
  <div>
    <h1>Hola mi nombre es {nombre}</h1>
    <p>Soy Ingeniero de Sistemas</p>
  </div>
);

const react = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, `Hola mi nombre es ${nombre}`),
  React.createElement("p", {}, "Soy Ingeniero de Sistemas")
);

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(<Badges />, container);
