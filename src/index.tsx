import React from "react";
import App from "./components/app";
import { createRoot } from "react-dom/client";
import "./index.css";

const domNode = document.querySelector("div#root");
const root = createRoot(domNode as Element);
root.render(<App />);
