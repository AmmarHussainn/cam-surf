import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Footer from '../Inner/Footer';
import AboutUsPage from '../Main/AboutUsPage/AboutUsPage';
import Home from '../Main/Home/Home';


const Router = () => {
  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
