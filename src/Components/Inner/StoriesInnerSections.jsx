import React from "react";
import StoriesBanner from "./StoriesBanner";
import { chatwith, randomvideos, storiesfirstbanner } from "../../assets";
import Banner from "./Banner";
import SubBanner from "./SubBanner";

const StoriesInnerSections = () => {
  return (
    <div>
      <div className="container px-4 mx-auto">
        <div className="text-center py-10 max-w-[700px] mx-auto">
          <h4 className="text-2xl font-bold pb-7">Stories</h4>
          <p>
            The Stories section was created to provide insights giving
            Camsurfers to opportunity to learn about features and helpful tips
            to effectively use Camsurf's random video chat service.
          </p>
        </div>

        <StoriesBanner 
        leftside={true}
        heading= "Camsurf — The Best Way to Connect with People All Over the World   "
        ButtonsLabel={true}
        image={storiesfirstbanner}
        buttonBackgroundColor = "#0197F5"
        content1="Thousands of people are using Camsurf to connect with others around the world and so can you! We make it easier than ever before to meet new people."
       />
        <StoriesBanner 
        rightside={true}
        heading= "Camsurf — The Best Way to Connect with People All Over the World   "
        ButtonsLabel={true}
        image={randomvideos}
        buttonBackgroundColor = "#161616"
        content1="Thousands of people are using Camsurf to connect with others around the world and so can you! We make it easier than ever before to meet new people."
       />
      </div>

      <div className="text-white bg-[#0564B9]">
   <SubBanner
   innerBannerBg="whobanner"
   heading= "Who is On Camsurf?"
   paragraph="You never know who is out there wanting to talk. You never know who may pop up on the other end of the chat."
   />
 </div>

 <StoriesBanner 
        leftside={true}
        heading= "Can I Filter Who I Chat With?"
        ButtonsLabel={true}
        image={chatwith}
        buttonBackgroundColor = "#161616"
        content1="If you are curious about Camsurf, but wondering how it works and if you have control of who you talk to, the short answer is yes. You can filter who you talk with"
       />
    </div>
  );
};

export default StoriesInnerSections;
