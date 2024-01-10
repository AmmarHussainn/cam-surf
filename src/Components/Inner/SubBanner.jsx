import React from 'react'

const SubBanner = ({innerBannerBg ,heading ,paragraph}) => {
  return (
    <div> 
    <div
    className={`${innerBannerBg} relative overflow-hidden bg-cover bg-center  bg-no-repeat py-36`}
  >
    <div className="absolute top-0 left-0 w-full h-full "></div>
    <div className="container mx-auto  text-white px-4">
      <div className="flex max-w-[1200px] flex-col">
        <h2 className=" font-bold px-4 lg:text-[49px] sm:text-3xl text-[26px] lg:leading-[60px] lg:pb-0 pb-5 text-center">
          <span>
           {heading}
          </span>
        </h2>
       
       <p className='text-center py-4 max-w-[400px] w-full mx-auto'>
        {paragraph}
       </p>
       
      </div>
    </div>
  </div>
  </div>
  )
}

export default SubBanner