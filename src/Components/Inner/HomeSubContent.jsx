import React from 'react'
import SvgIcons from '../../assets/SvgIcons'

const HomeSubContent = ({image , heading ,content , pinktext,buttonLabel}) => {
  return (
    <div className="container px-4   py-5  text-[#727272]  flex flex-wrap lg:flex-nowrap gap-7  justify-center items-center lg:justify-around  mx-auto max-w-[1300px] w-full">
    <div className="max-w-[500px] w-full">
       <img src={image} alt="mazenavigator" />
     </div>
     <div className="max-w-[400px] w-full flex flex-col gap-6 justify-start text-[#727272] ">
       <p className=" md:text-4xl text-[#0564B9] text-3xl font-bold">
        {heading} <span>{pinktext}</span>
       </p>
       <p className=" ">
        {content}
       </p>
         {buttonLabel && (
         <button className="rounded-3xl items-center justify-center gap-3   bg-[#030303] flex overflow-hidden text-sm font-bold py-2 w-[50%] text-white font-poppins">
         Start Video Chat  <SvgIcons.VideoCharacter />
         </button>
       )}
     
     </div>
 
     
   </div>
  )
}

export default HomeSubContent