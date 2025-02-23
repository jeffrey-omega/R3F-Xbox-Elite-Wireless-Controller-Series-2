import App from "@/App";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

console.log("env", process.env.ENV);
console.log("node env", process.env.NODE_ENV);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
