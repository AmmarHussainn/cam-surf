import React from 'react'
import Banner from '../../Inner/Banner'
import Footer from '../../Inner/Footer'
import ChatGuideLines from '../../Inner/ChatGuideLines'
import Navbar from '../../Inner/Navbar'

const GuideLines = () => {
  return (
    <>
     <Navbar/> 
     <Banner 
      innerBannerBg= "banner"
      heading="Guidelines"
      />
     <ChatGuideLines/>
     
    </>
  )
}

export default GuideLines