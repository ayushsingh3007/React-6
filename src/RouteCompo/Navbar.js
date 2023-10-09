import React, { useState } from "react";
import { Home } from "../Handson/Home";
import Student from "../Handson/Student";
import { Contact } from "../Handson/Contact";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import EditStudent from "../Handson/EditStudent";
import AddStudent from "../Handson/AddStudent";
import { StoreProvider } from "../Store/Store";

function Navbar() {
  const [stuData, setStuData] = useState([
    { id: 1, Name: "shyam", Age: 24, Course: "MERN", Batch: "oct" },
    { id: 2, Name: "Ram", Age: 24, Course: "MERN", Batch: "oct" },
    { id: 3, Name: "ayush", Age: 24, Course: "MERN", Batch: "oct" },
    { id: 4, Name: "piyush", Age: 24, Course: "MERN", Batch: "oct" },
    { id: 5, Name: "gaurav", Age: 24, Course: "MERN", Batch: "oct" },
    { id: 6, Name: "kishan", Age: 24, Course: "MERN", Batch: "oct" },
    { id: 7, Name: "abhi", Age: 24, Course: "MERN", Batch: "oct" },
  ]);

  return (
    <StoreProvider value={{ data: stuData, dataFunc: setStuData }}>
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
          <Route path="/add" element={<AddStudent />} /> {/* This line was missing */}
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default Navbar;
