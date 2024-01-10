import React from "react";
import SvgIcons from "../../assets/SvgIcons";

const guidelinesData = [
  {
    title: "It is a violation of our Terms of Use show disrespect to other chat users, including:",
    content: [
      
      "obscene, indecent, or abusive commentaries;",
      "harassing activities towards other chat users based on their perceived religion, race, sexual orientation, gender or other factors;",
      "threatening behavior towards other chat users;",
      "engaging in, or portraying violent or illegal behavior."
    ]
  },
  {
    title: "Our Terms of Use prohibits indecent behavior, namely:",
    content: [
     
      "to be naked or undressed while chatting;",
      "to show naked portions of your body to the camera;",
      "to offer virtual sex to other chat users;",
      "lowering your camera aim to below your chest (please keep the camera centered on your face);",
      "to otherwise simulate or suggest sexual activity."
    ]
  },
  {
    title: "Our Terms of Use also prohibits Users:",
    content: [
     
      "to broadcast your monitor’s image;",
      "to aim the web camera at the images;",
      "to aim the web camera at any text;",
      "to use some software that imitates web cameras.",
     
    ]
  },
  {
    title: "Our Terms of Use prohibits spam, which includes:",
    content: [
     
      "to demonstrate commercial images and to post marketing comments;",
      "to send uninvited commercial links in messages;",
      "to be engaged in blanket mailing;",
      "to otherwise request users to review materials or engage in commercial activity.",
     
    ]
  },
  {
    title: "Complaint Mechanism",
    content: [
     
      "Every chat guest can file a complaint against another chat user. We request that you provide as much information as you have available about the incident, including screenshots.",
      "Complaints are reviewed and evaluated on the basis of the amount of complaints the user has recieved and the nature of the complaint.",
     
    ]
  },
  {
    title: "Complaint Mechanism",
    content: [
     
      "Reporting violations of our Terms of Use assists us in providing a safe, and enjoyable community. We appreciate your participation, and will review complaints as they are received and decide what action should be taken at our discretion.",
     
    ]
  }
];

const ChatGuideLines = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h3 className="text-center font-bold text-2xl">Chat Guidelines</h3>

      <div className="w-full mt-5 grid grid-cols-1 place-content-between place-items-center gap-3 md:grid-cols-2">
        {guidelinesData.map((guideline, index) => (
          <div key={index} className="w-full max-w-[700px] h-[280px] border p-2 border-[#FF5887]">
            <div className="flex items-center border justify-start w-full px-2 gap-2">
              
              <SvgIcons.RoundedArrow  />
              <p className="font-semibold text-base">{guideline.title}</p>
            </div>
            <ul className="list-disc px-8 py-3 pl-12 text-sm">
              {guideline.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="w-full flex justify-end pr-10">
              <SvgIcons.SimpleArrow />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatGuideLines;
