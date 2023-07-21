import React from "react";
import { useRouter } from "next/router";

const Header = ({ text }: any) => {
  const [dark, setdark] = React.useState(false);
  const router = useRouter();
  return (
    <div className="w-5/6 mx-auto pt-12">
      <div className="flex items-center justify-between">
        <div>
          <div>
            <p className="flex space-x-1 tracking-widest font-pop-300 text-2xl">
              <span className="text-sky-500">DIKSHANT</span>
              <span>STUDIO</span>
            </p>
          </div>
          {text && (
            <p className="mt-4 text-sm font-pop-300 tracking-widest">
              THE ULTIMATE PHOTOGRAPHIC ODYSSEY AWAITS WITHIN.
            </p>
          )}
        </div>

        <div className="flex space-x-12 items-center">
          <div className="font-pop-300">
            <button
              className="tracking-widest "
              onClick={() => router.push("explore")}
            >
              EXPLORE
            </button>
          </div>
          <div className="flex space-x-3">
            <div
              onClick={() => setdark(false)}
              className="cursor-pointer p-2 border border-black rounded-full"
            ></div>
            <div
              onClick={() => setdark(true)}
              className="cursor-pointer p-2 bg-black border border-black rounded-full"
            ></div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-play-600 text-2xl tracking-widest">EN</p>
            <div className="min-w-fit">
              <div className="border mt-3 border-gray-600 rounded-full p-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
