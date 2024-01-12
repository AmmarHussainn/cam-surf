import React from 'react'
import Banner from '../../Inner/Banner'
import HomeContentBanner from '../../Inner/HomeContentBanner'
import { aboutvideosection } from '../../../assets'
import WeAreDifferent from '../../Inner/WeAreDifferent'
import TestomonialsBanner from '../../Inner/TestomonialsBanner'

const AboutUsPage = () => {
  return (
    <div>
      <Banner 
      innerBannerBg= "banner"
      heading="About us"
      />
      <HomeContentBanner
          heading="About Camsurf"
          pinktext="Video Chat"
          image={aboutvideosection}
         
          content1="Camsurf is a random video chat app that allows users to connect with people from all over the world. With this idea at the core of our service, we offer users an easy-to-use, fun, and free platform where they can engage in conversations with random people and make new friends."
          />
          <div className='bg-[#212121]  w-full'>
          <WeAreDifferent/>
          </div>

            <TestomonialsBanner />
    </div>
  )
}

export default AboutUsPage