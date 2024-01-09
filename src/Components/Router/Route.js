import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Footer from '../Inner/Footer';
import AboutUsPage from '../Main/AboutUsPage/AboutUsPage';
import Home from '../Main/Home/Home';
import GuideLines from "../Main/GuideLines/GuideLines.jsx"

const Router = () => {
  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/guidelines" element={<GuideLines/>} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
