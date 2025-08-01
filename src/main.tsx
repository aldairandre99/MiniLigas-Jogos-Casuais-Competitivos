import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter  } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter >
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
