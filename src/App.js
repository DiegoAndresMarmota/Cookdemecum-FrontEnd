import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Componentes
import Landing from "./components/Landing";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import MiPerfil from "./components/MiPerfil";
import Feed from "./components/Feed";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" exact element={<Feed />} />
          <Route path="/miPerfil" element={<MiPerfil />} />
        </Route>

        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
