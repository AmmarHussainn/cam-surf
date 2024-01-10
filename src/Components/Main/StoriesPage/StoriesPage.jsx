import React from "react";
import Banner from "../../Inner/Banner";
import StoriesInnerSections from "../../Inner/StoriesInnerSections";

const StoriesPage = () => {
  return (
    <div>
      <Banner
        innerBannerBg="banner"
        heading="Stories"
      />
      <StoriesInnerSections />
      
    </div>
  );
};

export default StoriesPage;
