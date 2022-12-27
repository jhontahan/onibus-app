import React from "react";
import { Navbar } from "react-bootstrap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ViewCadBairro from "../../views/onibus/bairro";
import Footer from "../footer";
import NavbarMenu from "../navBar";

function Rotas() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/bairro" element={<ViewCadBairro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;