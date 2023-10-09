import React from "react";
import { Home } from "../Handson/Home";
import Student from "../Handson/Student";
import { Contact } from "../Handson/Contact";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import EditStudent from "../Handson/EditStudent";
import AddStudent from "../Handson/AddStudent";
import { StoreProvider } from "../Store/Store";

function Navbar() {
  return (
    <BrowserRouter>
      <div id="navbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/student">Student</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:index" element={<EditStudent />} />
        <Route path="/add" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
