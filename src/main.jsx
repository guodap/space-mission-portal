// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// NOTE: Each useEffect is run twice during dvelopment.
// Strict Mode intentionally mounts and unmounts components twice to help identify side effects.
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
