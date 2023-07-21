import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "react-feather";
import { useRouter } from "next/router";

const aboutme = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-cover">
      <Header text={false} />
      <div className="mx-auto relative w-5/6 mt-12">
        <div className="flex absolute">
          <h1 className="font-mono-400 absolute bottom-10 right-40 w-24 text-gray-700 border-b-2 border-l-2 px-4 border-yellow-400 pb-3">
            Pro Photographer
          </h1>
          <h1 className="font-mono-400 absolute -bottom-20 right-80 w-60 text-gray-700 border-b-2 border-r-2 border-pink-400 pb-3">
            Let's Take your photograph to a whole new level with my studio!
          </h1>
          <div className="font-mono-400 absolute -bottom-40 right-80 w-3/6 text-gray-700 flex space-x-5 items-center">
            <h1>Let's Take a Tour of My Portfolio</h1>
            <span
              onClick={() => router.push("/")}
              className="p-2 bg-black rounded-full shadow-2xl animate-shake"
            >
              <ChevronRight color="white" size={14} />
            </span>
          </div>
          <Image
            src="/port.jpg"
            className="object-cover border-4 rounded-r-full rounded-l-full"
            width={800}
            height={800}
            alt=""
          />
          <div className="p-24 absolute rounded-full bg-yellow-400 shadow-2xl border-black border-2 -bottom-32 left-50">
            <p className="font-jost-300 text-2xl">Hi, I am Dikshant Raj</p>
          </div>
          <div className="p-24">
            <h1 className="font-jost-300 text-xl w-4/5">
              I am a skilled photographer and meticulous photo editor, capturing
              and refining moments through my lens to create captivating visual
              stories.
            </h1>
            <button className="px-4 py-4 font-pop-300 tracking-widest border-2 border-black mt-4">
              HIRE ME 😊
            </button>
            <div className="social flex space-x-2 mt-6">
              <img className="" width={30} src="/pin.png" alt="" />
              <img className="" width={30} src="/dribble.png" alt="" />
              <img className="" width={30} src="/linkedin.png" alt="" />
              <img className="" width={30} src="/insta.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutme;
