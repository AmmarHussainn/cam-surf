import React from 'react'
import StoriesBanner from './StoriesBanner'
import { audiance, overviewbanner, randomvideo, rapidgrowth } from '../../assets'

const PressInnerSection = () => {
  return (
    <div>

<div className="container px-4 mx-auto">
        <div className="text-center py-10 max-w-[700px] mx-auto">
          <h4 className="text-2xl font-bold pb-7">Contacting Our Team</h4>
          <p>
            The Stories section was created to provide insights giving
            Camsurfers to opportunity to learn about features and helpful tips
            to effectively use Camsurf's random video chat service.
          </p>
        </div>

        <StoriesBanner 
        leftside={true}
        heading= "CamSurf Overview"
        ButtonsLabel={true}
        image={overviewbanner}
        buttonBackgroundColor = "#0197F5"
        content1="CamSurf created a video chat platform where random people can meet each other using their webcam. We bring thousands of people together daily and help form bonds between complete strangers through laughter, similar interests and love. Our simple to use interface allows our users to quickly get the hang of our site to begin meeting new people around the world instantly."
       />
        <StoriesBanner 
        rightside={true}
        heading= " How We Differ from Other Random Video Chat Apps"
       
        image={randomvideo}
        ultasks={true}
        content1="Since the original Chatroulette site launched back in 2009, hundreds of sites with random chat features started opening. Most of them are the same with absolutely nothing that makes them unique. CamSurf is one of the few video chat sites that has unique benefits."
       />
    
 <StoriesBanner 
        leftside={true}
        heading= "Diversified Audience"    
        image={audiance}
        content1="We attract millions of people every single month and those people come from all walks of life. Our audience is very diversified with users from over 200 different countries.
        When using CamSurf you will meet people of many different ethnicities and locations. Whether you want to learn a new language or even discover a different culture, we make it a possibility. CamSurf is the ideal place to converse online and have quality conversations with real people."
       />



<StoriesBanner 
        rightside={true}
        heading= "Rapid Growth"
       
        image={rapidgrowth}
        
        content1="CamSurf has been experiencing rapid growth for the past few years and is constantly gaining a larger fan base. With thousands of followers on Facebook and thousands of users always on webcam, there’s never a dull moment when using this video chat site. Our users love Camsurf and thousands of new people are joining in on the fun every day."
       />
    
      </div>

    </div>
  )
}

export default PressInnerSection