import React from "react";
import Banner from "../../Inner/Banner";
import StoriesInnerSections from "../../Inner/StoriesInnerSections";
import Navbar from "../../Inner/Navbar";

const StoriesPage = () => {
  return (
    <div>
      <Navbar />
      <Banner
        innerBannerBg="banner"
        heading="Stories"
      />
      <StoriesInnerSections />
      
    </div>
  );
};

export default StoriesPage;
