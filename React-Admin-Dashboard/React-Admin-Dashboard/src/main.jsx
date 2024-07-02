import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

let key =
  "Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx0Rnxbf1x0ZFZMZVhbRnNPMyBoS35RckVlW3dfcHBTR2hUVUVx";
registerLicense(key);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
