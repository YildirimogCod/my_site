import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between mt-7">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 🖐 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Oğuzhan"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300 mt-3">
          {
            "Based in Istanbul, I'm front-end developer passionate about building a modern web application that users love."
          }
        </p>
        <Link href={"mailto:some@gmail.com"} className="inline-block">
          <Title text="Contact Me📮" />
        </Link>
      </div>
      <div className="w-72 h-72 space-y-3 rotate-[30deg] relative">
        <div>
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <MovingBorderBtn borderRadius="0.5rem" className="ml-4 p-3">
          <p>Available for work</p>
        </MovingBorderBtn>
      </div>
    </div>
  );
};

export default Hero;
