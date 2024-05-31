"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
const skills = [
  {
    text: "Javascript",
    Icon: SiJavascript,
  },
  {
    text: "HTML",
    Icon: SiHtml5,
  },
  {
    text: "CSS",
    Icon: SiCss3,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Next",
    Icon: SiNextdotjs,
  },
  {
    text: "Tailwind",
    Icon: SiTailwindcss,
  },
  {
    text: "Git",
    Icon: SiGit,
  },
  {
    text: "Node",
    Icon: SiNodedotjs,
  },
];
const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
