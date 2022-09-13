import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./context/UserContext";
import ProvidersTech from "./context/TechContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ProvidersTech>
          <App />
        </ProvidersTech>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
