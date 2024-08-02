import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

let key =
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVJpR2Nbe05xdl9DaVZRTGY/P1ZhSXxXdk1jW35cdX1VT2hUVUw=";
registerLicense(key);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
