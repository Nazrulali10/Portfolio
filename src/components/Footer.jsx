import {
  FileUser,
  Github,
  Linkedin,
  Mail,
  Phone,
  Instagram,
  Twitter
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="text-gray-300 w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nazrul-ali-n-3b585b333",
    },
    {
      icon: <Github className="text-gray-300 w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/Nazrulali10",
    },
    {
      icon: <Instagram className="text-gray-300 w-5 h-5" />,
      label: "Instagram",
      link: "https://www.instagram.com/iamnaxrul?igsh=amw0dXluaXdjYzB1",
    },
    {
      icon: <Twitter className="text-gray-300 w-5 h-5" />,
      label: "X",
      link: "https://x.com/iamnaxrul?t=gA8FoIfSHP-XldlVK3jr2w&s=09",
    },
    {
      icon: <FileUser className="text-gray-300 w-5 h-5" />,
      label: "Resume",
      link: "https://drive.google.com/file/d/1Abzc96Eku171NpJGnBJiyKXtme1PdBq9/view",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="text-gray-300 w-4 h-4" />,
      label: "nazrulali555@gmail.com",
      link: "mailto:nazrulali555@gmail.com",
    },
    {
      icon: <Phone className="text-gray-300 w-4 h-4" />,
      label: "+91 9159633240",
      link: "tel:+919159633240",
    },
  ];

  return (
    <footer className="w-full bg-white text-gray-600 pt-14 pb-8 px-6 md:px-14 border-t border-gray-100">

      {/* Top: Contact + Social */}
      <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">

        {/* Column 1 - Branding */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Nazrul Ali</h2>
          <p className="text-sm text-gray-400 mt-2">
            Full Stack Developer • Creating modern web experiences.
          </p>
        </div>

        {/* Column 2 - Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Contact</h3>
          <div className="mt-4 space-y-3">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-600 transition"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 - Social */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Social</h3>
          <div className="mt-4 flex flex-col gap-3">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-600 transition"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Copy */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        © Copyrights {new Date().getFullYear()} <strong>Nazrul Ali</strong>. All Rights Reserved.
        <br />

      </div>

    </footer>
  );
};

export default Footer;
