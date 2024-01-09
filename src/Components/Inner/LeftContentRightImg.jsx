import React from "react";
import { appleplaybtn, googleplaybtn, happyman } from "../../assets";
import SvgIcons from "../../assets/SvgIcons";

const LeftContentRightImg = () => {
  return (
    <div className="container px-4  lg:px-9 py-5  text-black  flex flex-wrap lg:flex-nowrap gap-7 justify-center items-center lg:justify-between  mx-auto max-w-[1300px] w-full">
      <div className="max-w-[400px] w-full flex flex-col gap-6 justify-start text-black ">
        <div className="flex items-center gap-3">
          <p className="font-raleway text-3xl text-[#FF5887] font-bold">
            {" "}
            Meet New People{" "}
          </p>
          {/* <img src={line} alt="line" className="w-20 h-1"/> */}
        </div>
        <p className=" text-5xl md:text-3xl  font-bold font-poppins">
          9,851,548 joined Camsurf
        </p>
        <p className="font-poppins text-sm">
          I certify I have read and agree to the Terms of Use and Cookie
          Notice. I certify I am at least 18-years old and have reached the age
          of majority where I live.
        </p>
        <div className="flex gap-4 md:flex-nowrap flex-wrap">
          <button className="rounded-3xl items-center justify-center gap-3   bg-[#FF5887] flex overflow-hidden text-sm font-bold py-2 w-[50%] text-white font-poppins">
          Select Your Gender  <SvgIcons.Character />
          </button>
          <button className="rounded-3xl items-center justify-center gap-3   bg-[#0197F5] flex overflow-hidden text-sm font-bold py-2 w-[50%] text-white font-poppins">
          Start Video Chat  <SvgIcons.VideoCharacter />
          </button>
        </div>

        <button className="rounded-3xl bg-black items-center justify-center gap-3    flex overflow-hidden text-sm font-bold py-2 w-full text-white font-poppins">
        Unlock All Futures  <SvgIcons.Lock />
          </button>


          <div className="">
            <p className="font-bold text-lg py-2">Report Bugs and Issue</p>
            <input placeholder="Type Your Massege Here and Press Enter" type="text" className="w-full py-2 rounded-md px-2" name="" id="" />
          </div>

          <div className="flex gap-4 md:flex-nowrap flex-wrap">
          <img src= {googleplaybtn} className="md:w-[50%] h-[50px] w-full" alt="" srcset="" /> 
          <img src= {appleplaybtn} className="md:w-[50%] h-[50px] w-full" alt="" srcset="" /> 
        </div>
      </div>

      <div className="max-w-[600px] w-full">
        <img src={happyman} alt="mazenavigator" />
      </div>
    </div>
  );
};

export default LeftContentRightImg;
