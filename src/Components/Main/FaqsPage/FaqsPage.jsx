import React from 'react'
import Banner from '../../Inner/Banner'
import FaqsDescription from '../../Inner/FaqsDescription'
import Navbar from '../../Inner/Navbar'

const FaqsPage = () => {
  return (
    <div>
       <Navbar/>
      <Banner 
      innerBannerBg= "banner"
      heading="Video Chat FAQ"
      />
      <FaqsDescription />
    </div>
  )
}

export default FaqsPage