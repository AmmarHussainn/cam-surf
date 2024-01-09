import React from 'react'

const Banner = ( 
    {
        innerBannerBg,
        heading
      }
) => {
  return (
    <div> 
        <div
        className={`${innerBannerBg} relative overflow-hidden bg-cover bg-center  bg-no-repeat py-36`}
      >
        <div className="absolute top-0 left-0 w-full h-full "></div>
        <div className="container mx-auto  text-black px-4">
          <div className="flex max-w-[1200px] flex-col">
            <h2 className=" font-bold px-4 lg:text-[49px] sm:text-3xl text-[26px] lg:leading-[60px] lg:pb-0 pb-5 text-center">
              <span>
               {heading}
              </span>
              
             
            </h2>

           
          </div>
        </div>
      </div>
      </div>
  )
}

export default Banner