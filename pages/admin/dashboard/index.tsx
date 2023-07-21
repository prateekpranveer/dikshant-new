import React from "react";
import { Edit } from "react-feather";
import { useRouter } from "next/router";

const dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-5/6 mx-auto mt-10 flex flex-col space-y-4">
        <h1 className="font-pop-300 tracking-widest">
          <span>DIKSHANT | Studio.</span>
        </h1>
        <div className="bg-gray-50 p-12">
          <h1 className="text-sm font-pop-300 tracking-widest">
            MAIN CUSTOMIZATION
          </h1>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => router.push("/admin/dashboard/landing-page")}
              className="font-pop-300 flex items-center space-x-2 text-white bg-teal-600 rounded-sm hover:bg-teal-800 tracking-widest max-w-fit px-4 py-2"
            >
              <>
                <Edit size={16} />
              </>
              <span>CUSTOMIZE LANDING PAGE</span>
            </button>
            <button
              onClick={() => router.push("/admin/dashboard/explore-page")}
              className="font-pop-300 flex items-center space-x-2 text-white bg-teal-600 rounded-sm hover:bg-teal-800 tracking-widest max-w-fit px-4 py-2"
            >
              <>
                <Edit size={16} />
              </>
              <span>CUSTOMIZE EXPLORE PAGE</span>
            </button>
          </div>
        </div>

        <div className="p-12 bg-gray-50">
          <h1 className="text-sm font-pop-300 tracking-widest">UPLOADS</h1>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => router.push("/admin/dashboard/create-category")}
              className="font-pop-300 text-white bg-teal-600 rounded-sm hover:bg-teal-800 tracking-widest max-w-fit px-4 py-2"
            >
              CREATE A NEW CATEGORY
            </button>
            <button
              onClick={() => router.push("/admin/dashboard/upload-image")}
              className="font-pop-300 text-white bg-teal-600 rounded-sm hover:bg-teal-800 tracking-widest max-w-fit px-4 py-2"
            >
              UPLOAD A NEW IMAGE
            </button>
          </div>
        </div>

        <div className="p-12 bg-gray-50">
          <h1 className="text-sm font-pop-300 tracking-widest">PRECURSORY</h1>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => router.push("/admin/dashboard/edit-entry")}
              className="font-pop-300 text-white bg-gray-600 hover:bg-gray-800 rounded-sm tracking-widest max-w-fit px-4 py-2"
            >
              EDIT ENTRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
