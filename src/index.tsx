import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const { error } = console;
console.error = (...args: string[]) => {
  if (
    args[0] &&
    typeof args[0] === "string" &&
    /defaultProps/.test(args[0]) &&
    import.meta.env.VITE_MODE === "development"
  ) {
    return;
  }

  error(...args);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
