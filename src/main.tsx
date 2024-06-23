import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WebApp from "@twa-dev/sdk";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";

WebApp.ready();
WebApp.expand();
WebApp.setHeaderColor("#0E0E0E");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
