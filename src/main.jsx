import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./assets/styles/GlobalStyle.js";
import Layout from "./components/layout/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout/>
    <App />
  </React.StrictMode>
);
