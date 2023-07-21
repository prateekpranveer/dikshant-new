import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { SET_ACTIVE } from "@/store/reducers/categoryData";
import ProgressiveImage from "react-progressive-graceful-image";

const Category = () => {
  const [Index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [aspect, setaspect] = useState("full");

  const category = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  const [images, setimages] = React.useState<any>();
  console.log(images);

  React.useEffect(() => {
    const images = async () => {
      await axios
        .get(`/image/getallimg/${category.active}`)
        .then((res) => setimages(res.data));
    };
    images();
  }, [category]);

  const handleCategoryChange = (e: any) => {
    dispatch({
      type: SET_ACTIVE,
      payload: e.target.value,
    });
  };

  return (
    <div>
      <div className="w-5/6 mx-auto py-6 overflow-hidden h-screen">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-pop-300 tracking-widest max-w-fit py-2 rounded-full">
            <h1 className="py-2">
              <span className="text-sky-400">DIKSHANT</span> STUDIO | EXPLORE |
              STREET
            </h1>
          </div>
          <div className="border max-w-fit px-2 py-2 font-pop-300 text-sm">
            <select name="Filter" id="" onChange={handleCategoryChange}>
              {category.category?.map((p: any) => (
                <option key={p.catId} value={p.catId}>
                  {p.catName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="h-5/6 mt-4 flex">
          <div className="w-5/6">
            <ProgressiveImage
              src={images && images[Index].fileUrl}
              placeholder={"/head.png"}
            >
              {(src, loading) => (
                <img
                  className={`image${
                    loading ? " loading" : " loaded"
                  } w-${aspect} h-full object-cover`}
                  src={src}
                  alt="sea beach"
                  width={800}
                  height={800}
                />
              )}
            </ProgressiveImage>
          </div>
          <div className="w-1/6 border ml-2">
            <div className="w-full mx-auto">
              <h1 className="font-pop-300 tracking-wider text-center mt-4">
                SELECT ASPECT
              </h1>
              <div onClick={() => setaspect("full")} className="p-4">
                <div
                  className={`w-56 h-32 ${
                    aspect == "full" && "border-2 border-black"
                  } border`}
                ></div>
              </div>
              <div onClick={() => setaspect("4/5")} className="p-4">
                <div
                  className={`w-48 h-32 ${
                    aspect == "4/5" && "border-2 border-black"
                  } border`}
                ></div>
              </div>
              <div onClick={() => setaspect("3/5")} className="p-4">
                <div
                  className={`w-32 h-32 w-${
                    aspect == "3/5" && "border-2 border-black"
                  } border`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-1 w-42 pb-40 py-2 h-screen ">
          {images?.map((p: any, id: any) => (
            <div
              key={id}
              onClick={() => {
                setIndex(id);
              }}
              className="w-20 h-20 overflow-hidden"
            >
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={p.fileUrl}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
