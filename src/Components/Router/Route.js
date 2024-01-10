import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Footer from '../Inner/Footer';
import AboutUsPage from '../Main/AboutUsPage/AboutUsPage';
import Home from '../Main/Home/Home';
import GuideLines from "../Main/GuideLines/GuideLines.jsx"
import FaqsPage from '../Main/FaqsPage/FaqsPage.jsx';
import StoriesPage from '../Main/StoriesPage/StoriesPage.jsx';
import PressPage from '../Main/PressPage/PressPage.jsx';

const Router = () => {
  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/guidelines" element={<GuideLines/>} />
        <Route path="/faqsPage" element={<FaqsPage/>} />
        <Route path="/storiespage" element={<StoriesPage/>} />
        <Route path="/presspage" element={<PressPage/>} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
