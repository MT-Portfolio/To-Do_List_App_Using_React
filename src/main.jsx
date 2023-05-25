import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import ToDoApp from "./App";
import MentionItem from "./components/Item";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);
