import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";
import "../index.css";

const container = document.createElement("div");

container.id = "psit-redesign-root";

container.style.position = "fixed";
container.style.top = "0";
container.style.left = "0";
container.style.width = "100vw";
container.style.height = "100vh";
container.style.zIndex = "2147483647";
container.style.pointerEvents = "auto";

document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
