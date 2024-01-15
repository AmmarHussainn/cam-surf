import React from "react";
import {
  appleplaybtn,
  bluearrowicon,
  camsurf,
  crownicon,
  googleplaybtn,
  happyman,
  settingicon,
  smileicon,
} from "../../assets";
import SvgIcons from "../../assets/SvgIcons";
import Navbar from "./Navbar";

const LeftContentRightImg = () => {
  return (
    <div className="bg-black">
    
    <div className="  px-4   lg:px-0      flex flex-wrap lg:flex-nowrap gap-7 justify-center items-center lg:justify-between  mx-auto  w-full">
      <div className="lg:max-w-[50%] py-10 px-4 blackpage bg-cover w-full flex flex-col gap-6 justify-center text-white ">
       
        <img src= {camsurf} alt="" className="w-[120px]" srcset="" />
        <p className=" text-xl md:text-3xl  font-bold font-poppins">
          9,851,548 joined Camsurf
        </p>
       
        <div className="flex gap-4 md:flex-nowrap flex-wrap">
          <button className="rounded-3xl items-center justify-center gap-3   bg-[#FF5887] flex overflow-hidden text-sm font-bold py-2 w-[50%] text-white font-poppins">
            Select Your Gender <SvgIcons.Character />
          </button>
          <button className="rounded-3xl items-center justify-center gap-3   bg-[#0197F5] flex overflow-hidden text-sm font-bold py-2 w-[50%] text-white font-poppins">
            Start Video Chat <SvgIcons.VideoCharacter />
          </button>
        </div>

        <button className="rounded-3xl bg-gradient-to-r from-[#161616] to-[#525252] items-center justify-center gap-3    flex overflow-hidden text-sm font-bold py-2 w-full text-white font-poppins">
          Unlock All Futures <SvgIcons.Lock />
        </button>
        
         <p className="font-poppins text-sm">
          I certify I have read and agree to the Terms of Use and Cookie
          Notice. I certify I am at least 18-years old and have reached the age
          of majority where I live.
       
         </p>
      
        <div className="flex gap-4 md:flex-nowrap flex-wrap">
          <img
            src={googleplaybtn}
            className="md:w-[50%] h-[50px] w-full"
            alt=""
            srcset=""
          />
          <img
            src={appleplaybtn}
            className="md:w-[50%] h-[50px] w-full"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className="lg:max-w-[50%] h-[100vh] flex items-end redbannerimg bg-cover w-full">
        <div className="bg-[#EDEDED] w-full px-4 py-3 ">
          <h3 className="underline font-semibold">Report Bugs and Issue</h3>

          <div className="flex gap-1 items-center font-semibold text-sm">
            <p>9,851,548 joined Camsurf</p>
            <div className="flex gap-1 items-center">
              <img src={crownicon} className="w-3 h-3 " alt="" srcset="" />
              <p className="underline">Special Offer, Get Plus Today!</p>
            </div>
          </div>

          <div className="w-full flex py-3 gap-2">
            <img src={settingicon} alt="" className="w-[40px]" srcset="" />
            <div className="bg-black flex my-auto py-2 rounded-md w-full">
              <input type="text" name="" className="pl-2 bg-black w-[80%] outline-none border-none text-gray-400  "
              placeholder="Type Your Massege Here and Press Enter"
              id="" />
            <img src={smileicon} alt="" srcset="" />
            <img src={bluearrowicon} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LeftContentRightImg;
