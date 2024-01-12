import React from 'react'
import { camsurf, iconfb, iconinsta, iconpin, icontwitter } from '../../assets'

const Footer = () => {
  return (
//     <div className="  relative text-white bg-gradient-to-b from-opacity-20 from-[#1E1E1E] to-black">
//   <div className="flex justify-between flex-wrap xl:max-w-[100%] container px-4 lg:px-9 mx-auto max-w-[90%] pb-16 pt-8">
//     <ul className="max-w-[250px] mt-8 w-full">
//       <img
//         src={camsurf}
//         className="pb-7"
//         alt=""
//         width={120}
//         height={71}
//       />
//       <p className="text-[15px] ">
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text
//         ever since.
//       </p>
//       <h5 className='font-bold text-xl text-[#FF5887]'>Follow Us Now</h5>
//       <div className="flex mt-3 justify-start  gap-2 items-center">
//           <img className="w-[50px]" src={iconfb} alt="" />
//           <img className="w-[50px]" src={iconinsta} alt="" />
//           <img className="w-[50px]" src={icontwitter} alt="" />
//           <img className="w-[50px]" src={iconpin} alt="" />
//       </div>
//     </ul>
//     <ul className="max-w-[250px] mt-8 w-full ">
//       <h1 className=" text-2xl text-primaryColor-0 font-bold pb-1 mb-6  ">
//       Quick Links
//       </h1>
//       <li className="pt-2 ">
//         <a
//           className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
//           href="/"
//         >
//           <p className="font-medium text-base ">Home</p>
//         </a>
//       </li>
//       <li className="pt-2 ">
//         <a
//           className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
//           href="/services"
//         >
//           <p className="font-medium text-base ">About us</p>
//         </a>
//       </li>
//       <li className="pt-2 ">
//         <a
//           className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
//           href="/whoWeServe"
//         >
//           <p className="font-medium text-base ">Faq</p>
//         </a>
//       </li>
//       <li className="pt-2 ">
//         <a
//           className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
//           href="/resourceOverview"
//         >
//           <p className="font-medium text-base ">Press</p>
//         </a>
//       </li>
//       <li className="pt-2 ">
//         <a
//           className="text-white flex items-center font-light hover:text-btnBlue-0 duration-100 text-lg cursor-pointer leading-6"
//           href="/contactUs"
//         >
//           <p className="font-medium text-base ">Stories</p>
//         </a>
//       </li>
//     </ul>

//     <ul className="max-w-[270px] mt-8 w-full ">
//       <h1 className=" capitalize text-xl  font-bold pb-1 mb-6  ">
//       Subscribe to our newsletter to get latest updates
//       </h1>
      
//       <input type="text" className="w-full boder border-[#FF5887] text-white rounded-lg border border-gray bg-[#252831] px-4 py-1 mb-4" placeholder="First Name" />
//       <input type="text" className="w-full boder border-[#FF5887] text-white rounded-lg border border-gray bg-[#252831] px-4 py-1 " placeholder="Last Name" />
  

//      <button type="submit" className="text-center bg-[#FF5887] w-full mt-5 py-1 rounded-lg">Subscribe</button>
//     </ul>

   
//   </div>
 
// </div>
<>

<div className='container  w-full text-white bg-gradient-to-b from-opacity-20 from-[#1E1E1E] to-black py-10 gap-4 px-7 place-content-between place-items-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3'>
<ul className="max-w-[150px]  mt-8 w-full">
       <img
         src={camsurf}
         className="pb-7"
         alt=""
         width={120}
         height={71}
       />
     
     </ul>
     <div  className="!max-w-[800px] flex-col md:text-base text-sm gap-4 md:flex-nowrap flex-wrap flex   justify-center items-center w-full">
     <ul className="!max-w-[800px] md:text-base text-sm gap-4 md:flex-nowrap flex-wrap flex   justify-center items-center w-full">
      <li >Privacy policy</li>
      <li >Terms of use </li>
    
     
     </ul>
     <ul className="!max-w-[800px] md:text-base text-sm gap-4 md:flex-nowrap flex-wrap flex   justify-center items-center w-full">
      <li >Home</li>
      <li >About </li>
      <li >Guidelines</li>
      <li >Stories</li>
      <li >Faq</li>
      <li >Press</li>
     
     </ul>
     </div>
     <ul className="max-w-[250px]   w-full">
   
       <div className="flex mt-3 justify-start  gap-2 items-center">
           <img className="w-[50px]" src={iconfb} alt="" />
           <img className="w-[50px]" src={icontwitter} alt="" />
           <img className="w-[50px]" src={iconinsta} alt="" />
           <img className="w-[50px]" src={iconpin} alt="" />
       </div>
     </ul>
</div>
<div className='text-center text-sm py-2 text-white  w-full bg-[#FF5887]'>
© 2024 Camsurf Website. All Rights Reserved.
</div>
</>
  )
}

export default Footer