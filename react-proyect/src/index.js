import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./styles/NavBar.css"
import "./styles/CartWidget.css"
import "./styles/Bienvenida.css"

const contenedor = document.getElementById('root')
const root = ReactDOM.createRoot(contenedor)

root.render(<App/>)