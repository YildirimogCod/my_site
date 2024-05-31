import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/o%C4%9Fuzhan-y%C4%B1ld%C4%B1r%C4%B1m/",
    icon: SiLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/YildirimogCod",
    icon: SiGithub,
  },
];
const Navbar = () => {
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
        Oğuzhan 🙋‍♂️
      </h1>
      <div className="flex items-center gap-4">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              key={index}
              href={social.url}
              aria-label={social.name}
              target="_blank"
            >
              <Icon className="size-5 hover:scale-125 transition-all duration-200" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
