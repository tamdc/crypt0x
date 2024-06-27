import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Layout from "./layout";
import "../styles/global.css";
import HackerNews from "./hacker-news";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/hacker-news" element={<HackerNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
