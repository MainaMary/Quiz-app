import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import UserContext from "../src/context/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <Navbar />
        <App />
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
