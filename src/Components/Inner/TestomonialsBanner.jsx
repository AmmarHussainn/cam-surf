import React from "react";
import { jamesredford, quotes, testimonialstars } from "../../assets";

const TestomonialsBanner = () => {
  return (
    <div className="bg-[#F9E7EA] py-10">
      <div className="container pr-10 mx-auto w-full flex justify-end">
        <img src={testimonialstars} className="w-[70px]" alt="" srcset="" />
      </div>
      <div className="mx-auto text-center">
        <p className="text-sm capitalize font-semibold">
          Look what our <span className="text-[#FF5887]">clients</span> are
          saying
        </p>
        <h3 className="uppercase font-semibold text-3xl">testimonials</h3>
      </div>

      <div className="container mx-auto py-8 px-10">
        <div className="jamesbanner flex px-9  lg:flex-nowrap flex-wrap justify-between gap-10  bg-cover h-[100v] lg:h-[350px] relative">
          <img src={jamesredford} className=" lg:-mt-6 mt-5 lg:z-10 h-[290px] lg:h-[390px]" alt="" />
          <div className="text-white pt-10  py-5">
            <img src={quotes} alt=""  />
            <p className="pt-10">
              This App Is So Cool: I’ve met a lot of people on here who are
              pretty chill and just wanna be friends. There are no creeps and I
              appreciate that very much. You should totally join and meet new
              people it’s actually legit.
            </p>
            <div  className="pt-4">
                <h6 className="text-2xl font-bold">James Radford</h6>
                <p>Social Media Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestomonialsBanner;
