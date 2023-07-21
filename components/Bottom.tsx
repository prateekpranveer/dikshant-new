import React from "react";
import { Plus } from "react-feather";

const images = [
  {
    img: "/12.jpg",
  },
  {
    img: "/13.jpg",
  },
  {
    img: "/14.jpg",
  },
  {
    img: "/15.jpg",
  },
  {
    img: "/12.jpg",
  },
  {
    img: "/13.jpg",
  },
];

const Bottom = ({ mode }: any) => {
  return (
    <div>
      <div>
        <h1 className="tracking-wider text-md font-pop-300">
          RIGHT FROM DIKSHANT STUDIO
        </h1>
        {mode ? (
          <>
            <div className="flex gap-x-6 mt-8">
              {mode &&
                images.map((p, id) => (
                  <div
                    key={id}
                    className="w-36 h-36 overflow-hidden bg-gray-200 rounded-lg"
                  >
                    {mode && (
                      <>
                        <img
                          className="h-full w-full object-cover"
                          src={p.img}
                          alt=""
                        />
                      </>
                    )}
                  </div>
                ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex hover:bg-gray-300 cursor-pointer gap-x-6 mt-8 bg-gray-200 rounded-lg h-40 w-full">
              <button className="ml-12 flex space-x-4 font-pop-300 tracking-widest items-center">
                <span>SELECT ALBUM</span>
                <span>
                  <Plus size={20} color="gray" />
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Bottom;
