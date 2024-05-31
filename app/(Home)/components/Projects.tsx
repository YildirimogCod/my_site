import {
  SiChakraui,
  SiCss3,
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const projects = [
  {
    title: "E-commerce Comfy Store",
    tech: [SiReact, SiRedux, SiVite, SiTailwindcss],
    link: "https://comfystore-flame.vercel.app/",
    cover: "/p1.PNG",
    background: "bg-indigo-500",
  },
  {
    title: "GymApp",
    tech: [SiNextdotjs, SiTailwindcss],
    link: "https://gymapp-nextjs-14.vercel.app/",
    cover: "/p2.PNG",
    background: "bg-green-500",
  },
  {
    title: "Weather",
    tech: [SiNextdotjs, SiShadcnui, SiTailwindcss],
    link: "https://weathernext-wine.vercel.app/",
    cover: "/p3.PNG",
    background: "bg-amber-300",
  },
  {
    title: "Crypto",
    tech: [SiReact, SiVite, SiCss3],
    link: "https://crypto-navy-rho.vercel.app/",
    cover: "/p4.PNG",
    background: "bg-rose-500",
  },
  {
    title: "Movies",
    tech: [SiReact, SiVite, SiChakraui, SiFirebase],
    link: "https://movie-react-js-xi.vercel.app//",
    cover: "/p5.PNG",
    background: "bg-cyan-500",
  },
];
const Projects = () => {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank">
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-2 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="size-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
