import React from "react";
import App from "./components/app";
import { createRoot } from "react-dom/client";

const domNode = document.querySelector("div#root");
const root = createRoot(domNode);
root.render(<App />);
