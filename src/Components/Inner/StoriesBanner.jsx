import React from "react";
import SvgIcons from "../../assets/SvgIcons";

const StoriesBanner = ({
  heading,
  content1,
  content2,
  ButtonsLabel,
  pinktext,
  image,
  smallheading,
  buttonBackgroundColor,
  leftside,
  rightside,
  ultasks,
}) => {
  return (
    <>
      {leftside && (
        <div className="container px-4 lg:px-9 pt-10 py-5  text-[#727272]  flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-around  mx-auto max-w-[1300px] w-full">
          <div className="max-w-[600px] w-full flex flex-col gap-2 justify-start text-[#727272] ">
            <p className=" md:text-4xl text-[#353535] text-3xl font-bold font-poppins">
              {heading} <span className="text-[#FF5887]">{pinktext}</span>
            </p>
            <p className="font-poppins text-[#424242] font-bold text-base ">
              {smallheading}
            </p>
            <p className="font-poppins text-[#424242]  ">{content1}</p>
            <p className="font-poppins py-2 text-[#424242]  ">{content2}</p>

            {ButtonsLabel && (
              <button
                className="rounded-3xl items-center justify-center gap-3 flex overflow-hidden text-sm font-bold py-2 w-[50%] text-white font-poppins"
                style={{ backgroundColor: buttonBackgroundColor }}
              >
                Start Video Chat <SvgIcons.VideoCharacter />
              </button>
            )}
          </div>

          <div className="max-w-[400px] w-full">
            <img src={image} alt="mazenavigator" />
          </div>
        </div>
      )}
      {rightside && (
        <div className="container px-4 lg:px-9 pt-10 py-5 gap-8  text-[#727272]  flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-around  mx-auto max-w-[1300px] w-full">
          <div className="max-w-[600px] w-full">
            <img src={image} alt="mazenavigator" />
          </div>
          <div className="max-w-[600px] w-full flex flex-col gap-2 justify-start text-[#727272] ">
            <p className="  text-[#353535] md:text-4xl text-2xl font-bold font-poppins">
              {heading} <span className="text-[#FF5887]">{pinktext}</span>
            </p>
            <p className="font-poppins text-[#424242] font-bold text-base ">
              {smallheading}
            </p>
            <p className="font-poppins text-[#424242]  ">{content1}</p>
            <p className="font-poppins py-2 text-[#424242]  ">{content2}</p>
            {ultasks && (
              <ul className="px-5 list-disc text-[#424242] text-sm">
                <li>
                  Camsurf developed a system that uses artificial intelligence
                  combined with community reporting to help us identify users
                  that violate our terms of use. This allows you to meet more
                  people who actually want to have conversations.
                </li>
                <li>
                  We are one of the only random video chat sites online to have
                  a fully functional mobile phone app in Google Play that is
                  available to use on all Android devices.
                </li>
              </ul>
            )}
            {ButtonsLabel && (
              <button
                className="rounded-3xl items-center justify-center gap-3 flex overflow-hidden text-sm font-bold py-2 w-[50%] text-white font-poppins"
                style={{ backgroundColor: buttonBackgroundColor }}
              >
                Start Video Chat <SvgIcons.VideoCharacter />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StoriesBanner;
