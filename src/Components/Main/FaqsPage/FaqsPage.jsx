import React from 'react'
import Banner from '../../Inner/Banner'
import FaqsDescription from '../../Inner/FaqsDescription'

const FaqsPage = () => {
  return (
    <div>
      <Banner 
      innerBannerBg= "banner"
      heading="Video Chat FAQ"
      />
      <FaqsDescription />
    </div>
  )
}

export default FaqsPage