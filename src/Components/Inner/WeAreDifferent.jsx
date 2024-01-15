import React from "react";
import { diffbanner } from "../../assets";

const WeAreDifferent = () => {
  return (
    <div className="container px-4 lg:px-9  lg:h-[380px]  text-white flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-around  mx-auto max-w-[1300px] w-full">
      <div className="max-w-[300px] z-40  w-full">
        <img src={diffbanner} alt="mazenavigator"  />
      </div>
      <div className="max-w-[600px] w-full flex flex-col px-5 gap-6 justify-start ">
        <h1 className="text-3xl text-[#0564B9] font-semibold pt-3">
          
          <span className="text-[#FF5887]">Why we’re different</span>
        </h1>
        <div>
          <p className="text-xs">
            Around our central idea of creating a better chat experience, we
            have built a platform which is simple to use and comes packed with
            great features. Our service is simple to use, users can begin
            chatting by simply agreeing to our terms and privacy. Then enabling
            their webcam and clicking on the large ‘Start’ button to begin video
            chatting instantly. Our servers are fast and reliable, ensuring that
            connection speeds are blazing fast, even when connecting to someone
            from the other side of the world. We also offer users the ability to
            choose the location of users they wish to connect with, providing a
            great way to learn a new language or find out about a different
            culture.
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default WeAreDifferent;
