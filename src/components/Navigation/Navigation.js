import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextForm from "../TextForm";
import About from "../About";
import Navbar from "../Navbar";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route > 
          {/* <Route path="/" element={<Navbar/>} />  */}
          {/* <Route path="textform" element={<TextForm/>} /> */}
            <Route path="about" element={<About/>} /> 
            <Route path="home" element={<TextForm/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
