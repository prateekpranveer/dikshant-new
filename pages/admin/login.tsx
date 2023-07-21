import React from "react";

const login = () => {
  return (
    <div>
      <div className="mx-auto items-center justify-center h-screen w-screen">
        <div className="w-80 mx-auto mt-52">
          <div>
            <h1 className="tracking-widest">LOGIN TO STUDIO.</h1>
          </div>
          <div className="flex space-y-4 flex-col mt-4">
            <input
              className="px-5 py-3 font-jost-300 border"
              type="text"
              placeholder="Enter Username"
            />
            <input
              className="px-5 py-3 font-jost-300 border"
              type="text"
              placeholder="Enter Password"
            />
            <button className="font-pop-300 text-sm tracking-wider px-4 py-4 bg-black text-white">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
