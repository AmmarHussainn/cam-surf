import React from 'react'
import { camsurf, iconfb, iconinsta, iconpin, icontwitter } from '../../assets'

const Footer = () => {
  return (
    <div className="  relative text-white bg-gradient-to-b from-opacity-20 from-[#1E1E1E] to-black">
  <div className="flex justify-between flex-wrap xl:max-w-[100%] container px-4 lg:px-9 mx-auto max-w-[90%] pb-16 pt-8">
    <ul className="max-w-[250px] mt-8 w-full">
      <img
        src={camsurf}
        className="pb-7"
        alt=""
        width={120}
        height={71}
      />
      <p className="text-[15px] leading-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since.
      </p>
      <div className="flex mt-3 justify-start  gap-2 items-center">
          <img className="w-[50px]" src={iconfb} alt="" />
          <img className="w-[50px]" src={iconinsta} alt="" />
          <img className="w-[50px]" src={icontwitter} alt="" />
          <img className="w-[50px]" src={iconpin} alt="" />
      </div>
    </ul>
    <ul className="max-w-[250px] mt-8 w-full ">
      <h1 className=" text-2xl text-primaryColor-0 font-bold pb-1 mb-6  ">
      Services
      </h1>
      <li className="pt-2 ">
        <a
          className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
          href="/"
        >
          <p className="font-medium text-base ">Home</p>
        </a>
      </li>
      <li className="pt-2 ">
        <a
          className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
          href="/services"
        >
          <p className="font-medium text-base ">Services</p>
        </a>
      </li>
      <li className="pt-2 ">
        <a
          className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
          href="/whoWeServe"
        >
          <p className="font-medium text-base ">Who we Serve</p>
        </a>
      </li>
      <li className="pt-2 ">
        <a
          className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
          href="/resourceOverview"
        >
          <p className="font-medium text-base ">Resources</p>
        </a>
      </li>
      <li className="pt-2 ">
        <a
          className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
          href="/contactUs"
        >
          <p className="font-medium text-base ">Contact us</p>
        </a>
      </li>
    </ul>

    <ul className="max-w-[270px] mt-8 w-full ">
      <h1 className=" capitalize text-xl  font-bold pb-1 mb-6  ">
      Subscribe to our newsletter to get latest updates
      </h1>
      
      <input type="text" className="w-full text-white rounded-lg border border-gray bg-[#252831] px-4 py-1 mb-4" placeholder="First Name" />
      <input type="text" className="w-full text-white rounded-lg border border-gray bg-[#252831] px-4 py-1 " placeholder="Last Name" />
  

     <button type="submit" className="text-center bg-[#0068B4] w-full mt-5 py-1 rounded-lg">Subscribe</button>
    </ul>

   
  </div>
 
</div>
  )
}

export default Footer