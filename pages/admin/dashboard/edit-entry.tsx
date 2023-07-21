import React from "react";
import Image from "next/image";
import axios from "../../../axios";

const EditEntry = () => {
  const [images, setimages] = React.useState<any>();
  React.useEffect(() => {
    const images = async () => {
      await axios.get("/image/getallimg/").then((res) => setimages(res.data));
    };
    images();
  }, []);

  return (
    <div>
      <div className="w-4/5 x-auto pt-12">
        <div>
          <div className="border max-w-fit px-2 py-2 font-pop-300">
            <select name="Filter" id="">
              <option value="Street">Street</option>
              <option value="Contemporary">Contemporary</option>
              <option value="Dark">Dark</option>
              <option value="Wedding">Wedding</option>
            </select>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap mt-12">
          {images?.map((p:any,id:any) => (
            <div key={id} className="w-40 h-40 bg-gray-100 rounded-lg">
              {p.fileName && (
                <Image
                  className="w-full h-full rounded-lg cursor-pointer object-cover"
                  width={200}
                  height={200}
                  src={p.fileUrl}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditEntry;
