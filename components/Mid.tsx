import React from "react";
import { Plus } from "react-feather";

const bigimg = "/13.jpg";

const Mid = ({ mode }: any) => {
  return (
    <div>
      <div className="flex space-x-12">
        <div className="w-80">
          <div className="relative">
            <div className="w-64 h-64 rounded-xl bg-gray-50 absolute top-4 left-4">
              {mode && (
                <img
                  className="h-full w-full object-cover rounded-md"
                  src={bigimg}
                  alt=""
                />
              )}
            </div>
            <div className="w-64 h-64 rounded-xl absolute bg-gray-100 top-8 left-8">
              {mode && (
                <img
                  className="h-full w-full object-cover rounded-md"
                  src={bigimg}
                  alt=""
                />
              )}
            </div>

            <div className="w-64 h-64 rounded-xl absolute top-12 bg-gray-200 hover:bg-gray-300 cursor-pointer left-12">
              {mode && (
                <img
                  className="h-full w-full object-cover rounded-md"
                  src={bigimg}
                  alt=""
                />
              )}
            </div>

            <div className="absolute w-24 top-40 left-40">
              {!mode && (
                <div>
                  <Plus size={40} color="gray" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="font-play-400 text-5xl w-100 lh-main">
            Photographs caressed, adorned, to unveil sheer enchanting beauty
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mid;
