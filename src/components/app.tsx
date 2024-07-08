import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Layout from "./layout";
import "../styles/global.css";
import HackerNews from "./hacker-news";
import CEXs from "./cexs";
import AuthProvider from "../context/authentication";
import Login from "./login";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/hacker-news" element={<HackerNews />} />
            <Route path="/cexs" element={<CEXs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
