import React, { useState } from "react";
import Store from "../Store/Store"; 
import { Home } from "../Handson/Home";
import Student from "../Handson/Student";
import { Contact } from "../Handson/Contact";

import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import EditStudent from "../Handson/EditStudent";
import AddStudent from "../Handson/AddStudent";

function Navbar(){
    const [stuData,setStuData]=useState([
        {id:1,Name:"shyam",Age:24,Course:"MERN", Batch:"oct"},
        {id:2,Name:"Ram",Age:24,Course:"MERN", Batch:"oct"},
        {id:3,Name:"ayush",Age:24,Course:"MERN", Batch:"oct"},
        {id:4,Name:"piyush",Age:24,Course:"MERN", Batch:"oct"},
        {id:5,Name:"gaurav",Age:24,Course:"MERN", Batch:"oct"},
        {id:6,Name:"kishan",Age:24,Course:"MERN", Batch:"oct"},
        {id:7,Name:"abhi",Age:24,Course:"MERN", Batch:"oct"},
    ])

    return (
        <BrowserRouter >
            <div id="navbar">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/student">Student</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <Routes>
                <Route
                    path='/student'
                    element={
                        <Store.Provider value={{ data: stuData, dataFunc: setStuData }}>
                            <Student />
                        </Store.Provider>
                    }
                />
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route
                    path='/edit/:index'
                    element={
                        <Store.Provider value={{ data: stuData, dataFunc: setStuData }}>
                            <EditStudent />
                        </Store.Provider>
                    }
                />
                <Route path='/add' element={<AddStudent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
