import React from 'react'
import Banner from '../../Inner/Banner'
import PressInnerSection from '../../Inner/PressInnerSection'
import Navbar from '../../Inner/Navbar'

const PressPage = () => {
  return (
    <div>
      <Navbar />
       <Banner
    innerBannerBg="banner"
    heading="Press"
  />
  <PressInnerSection />
  </div>

  )
}

export default PressPage