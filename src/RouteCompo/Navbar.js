import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home } from "../Handson/Home";
import Student from "../Handson/Student";
import { Contact } from "../Handson/Contact";
import EditStudent from "../Handson/EditStudent";
import AddStudent from "../Handson/AddStudent";
import { StoreProvider } from "../Store/Store";

function Navbar() {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
}

export default Navbar;
