

import { FileUser, Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactItems = [
    {
      icon: <Linkedin className="text-white w-6 h-6" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nazrul-ali-n-3b585b333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <Github className="text-white w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com/Nazrulali10",
    },
    {
      icon: <Mail className="text-white w-6 h-6" />,
      label: "nazrulali555@gmail.com",
      link: "mailto:nazrulali555@gmail.com",
    },
    {
      icon: <Phone className="text-white w-6 h-6" />,
      label: "+91 9159633240",
      link: "tel:+919159633240",
    },
    {
      icon: <FileUser className="text-white w-6 h-6" />,
      label: "Resume",
      link: "https://drive.google.com/file/d/1Abzc96Eku171NpJGnBJiyKXtme1PdBq9/view?usp=drivesdk",
    },
  ];

  return (
    <div className="flex flex-col w-full mt-20 h-auto bg-gray-950 px-10">
      <p className="mt-10 w-33 font-semibold text-2xl text-white">
        <strong>Contact Me</strong>
        <div className="w-full h-0.5 bg-gradient-to-tl from-sky-400 via-sky-600 to-indigo-400 rounded-full mt-2"></div>
      </p>

      <div className="flex flex-col w-full mt-6 gap-6 items-center mb-29 pt-5 md:pt-0">
       
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full max-w-md p-4 border-2 border-sky-500 rounded-full hover:bg-gray-800"
          >
            <div className=" p-2 rounded-full">
              {item.icon}
            </div>
            <span className="text-gray-300 text-sm pl-2">{item.label}</span>
          </a>
        ))}

      </div>
    </div>
  );
};

export default Contact;
