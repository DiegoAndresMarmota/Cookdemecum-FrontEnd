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
import SoloUser from "./components/SoloUser";
import AddBlog from "./components/AddBlog";
import SoloBlog from "./components/SoloBlog";
import EditBlog from "./components/EditBlog";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" exact element={<Feed />} />
          <Route path="/miPerfil" element={<MiPerfil />} />
          <Route path="/soloUser/:id" element={<SoloUser />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/soloBlog/:id" element={<SoloBlog />} />
          <Route path="/editBlog/:id" element={<EditBlog />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Route>

        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
