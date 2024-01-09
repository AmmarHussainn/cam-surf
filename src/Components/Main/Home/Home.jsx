import React from "react";
import LeftContentRightImg from "../../Inner/LeftContentRightImg";
import HomeContentBanner from "../../Inner/HomeContentBanner";
import { camchat, homefirstbannerimg, mobileappbanner } from "../../../assets";
import LeftImgRightContent from "../../Inner/LeftImgRightContent";
import HomeSubContent from "../../Inner/HomeSubContent";

const Home = () => {
  return (
    <>
      <div className="bg-cover h-auto w-[100vs] bannerbgimg ">
        <LeftContentRightImg />
        <HomeContentBanner
          heading="Free Random Video Chat"
          pinktext="App!"
          image={homefirstbannerimg}
          smallheading="Welcome to Camsurf’s random video chat app!"
          content1="On Camsurf you can connect with thousands of people from all over the world in a fun environment. Our community reporting system helps make sure that people chatting on Camsurf are following our terms of use. Chat with confidence and meet interesting people just like you instantly."
          content2="Our lightweight chat platform makes video chat easy without sacrificing great features. You’ll feel like a pro in seconds. Simply agree with our terms of use and privacy policy, allow access to your webcam and then click on the large ‘start’ button to be instantly connected to a new and interesting person. You can even filter connections by location or language."
          content3="Camsurf has thousands of users online at all times. If you want to meet someone new, simply click the ‘next’ button and you will be connected with a new stranger right away. It’s so simple to make hundreds of new friends, maybe you will even find that special someone."
        />
      </div>
      <div className="bg-[#212121] w-full">
        <LeftImgRightContent />
      </div>
      <div className="bg-[#F9E7EF] ">
        <HomeSubContent
          heading="Click and Cam"
          pinktext="Chat"
          content="At Camsurf we want to make meeting new people as simple as possible. Our random video chat platform uses the fastest servers to allow lightning fast connections and ultra-high-quality streams. It takes less than a second to connect with someone and you can enable sound, chat with a mic or use our in-built text chat to type while still viewing the other person’s webcam."
          buttonLabel={true}
          image={camchat}
        />
      </div>
      <HomeContentBanner
          heading="Mobile App on the Go"
          pinktext="Go"
          image={mobileappbanner}
          content1="As the perfect complement to our web browser-based chat platform, we are delighted to announce the launch of the Android Camsurf app. Now you can make new friends and meet new people wherever you are. The app is 100% free to download and designed to use minimal storage space on your device."
          content2="We’ve designed the app to offer all the same great features you find on our web-based platform. Enjoy lightning fast connections, the ability to filter by location and language and other features that make Camsurf one of the fastest growing video chat services online. Keep an eye out for our Apple Store app which is in development."
          ButtonsLabel={true}
        />
    </>
  );
};

export default Home;
