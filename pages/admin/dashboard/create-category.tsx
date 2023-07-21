import React from "react";

const CreateCat = () => {
  return (
    <div className="w-4/5 mx-auto pt-12 font-pop-300">
      <h1>Create Category</h1>
      <div className="flex flex-col space-y-4 mt-6">
        <input
          className="border w-1/3 py-3 px-2 rounded-md"
          type="text"
          placeholder="Category Name"
        />

        <input
          className="border w-1/3 py-3 px-2 rounded-md"
          type="text"
          placeholder='Id example: "nr,ct"'
        />

        <button className="max-w-fit px-2 py-1 bg-sky-400 text-white">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default CreateCat;
