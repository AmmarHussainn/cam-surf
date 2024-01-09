import React from 'react'
import SvgIcons from '../../assets/SvgIcons'
import { appleplaybtn, googleplaybtn } from '../../assets'

const HomeContentBanner = ({ ButtonsLabel, heading , content1 ,content2 ,content3 ,pinktext,image ,smallheading}) => {
  return (
    <div className="container px-4 lg:px-9 pt-10 py-5  text-[#727272]  flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-around  mx-auto max-w-[1300px] w-full">
    <div className="max-w-[600px] w-full flex flex-col gap-6 justify-start text-[#727272] ">
      <p className=" md:text-4xl text-[#0564B9] text-3xl font-bold font-poppins">
       {heading} <span className='text-[#FF5887]'>{pinktext}</span>
      </p>
        <p className="font-poppins text-[#424242] font-bold text-base ">{smallheading}</p>
      <p className="font-poppins text-[#424242] text-xs ">
       {content1} 
      </p>
      <p className="font-poppins py-2 text-[#424242] text-xs ">
       {content2} 
      </p>
      <p className="font-poppins text-[#424242] text-xs ">
       {content3} 
      </p>
     
       {ButtonsLabel && 
         <div className="flex gap-4 md:flex-nowrap flex-wrap">
         <img src= {googleplaybtn} className="md:w-[40%] h-[50px] w-full" alt="" srcset="" /> 
         <img src= {appleplaybtn} className="md:w-[40%] h-[50px] w-full" alt="" srcset="" /> 
       </div>
       }
    </div>

    <div className="max-w-[400px] w-full">
      <img src={image} alt="mazenavigator" />
    </div>
  </div>
  )
}

export default HomeContentBanner