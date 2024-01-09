import React from "react";
import { randomvideobanner } from "../../assets";

const LeftImgRightContent = () => {
  return (
    <div className="container px-4 lg:px-9   text-white flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-around  mx-auto max-w-[1300px] w-full">
      <div className="max-w-[600px] w-full">
        <img src={randomvideobanner} alt="mazenavigator"    className="z-50 " />
      </div>
      <div className="max-w-[600px] w-full flex flex-col gap-6 justify-start ">
        <h1 className="text-3xl text-[#0564B9] font-semibold pt-3">Random Video <span className="text-[#FF5887]"> Chat </span></h1>
        <div>
          <p className="text-xs">
            Camsurf is unique in many ways. We believe that everyone should be
            able to easily meet people from all over the world using their
            webcam. That is why we created a way for you to instantly video chat
            with people worldwide or in a specific location based on your
            preference. Our random video chat app is the perfect way to chat
            with strangers and meet cool new people instantly
          </p>
           <div className="w-full py-4 flex justify-around gap-3 ">
            <div>
                <p className="text-3xl text-[#FF5887] font-bold"> 3+</p>
                 <p className="text-xs text-white">Years of experience</p>
            </div>
            <div className=" px-4 border-white border-l-2 border-r-2">
                <p className="text-3xl text-[#FF5887] font-bold">84 k</p>
                 <p className="text-xs text-white">Active monthly users</p>
            </div>
            <div>
                <p className="text-3xl text-[#FF5887] font-bold">20 k</p>
                 <p className="text-xs text-white">Register Audiiunce</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImgRightContent;
