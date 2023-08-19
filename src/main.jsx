import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CanvasRenderer from "./components/CanvasRenderer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CanvasRenderer />
  </React.StrictMode>,
);
