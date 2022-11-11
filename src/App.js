import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Componentes
import { Landing } from "./components/Landing";
import { Header } from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
