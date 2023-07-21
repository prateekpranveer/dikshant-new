import Carousel from "@/components/Carousel";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE, SET_CATEGORY } from "@/store/reducers/categoryData";

const explore = () => {
  const router = useRouter();
  const category = useSelector((state: any) => state.category);
  const dispatch = useDispatch();
  console.log(category);

  React.useEffect(() => {
    const category = async () => {
      await axios.get("/image/getallcat").then((res) =>
        dispatch({
          type: SET_CATEGORY,
          payload: res.data,
        })
      );
    };
    category();
  }, []);

  return (
    <div>
      <Header />
      <div className="w-5/6 mx-auto mt-12 h-40">
        <div>
          <Carousel />
        </div>

        <div className="flex space-x-4 mt-8">
          {category.category?.map((p: any, id: any) => (
            <div key={id} className="flex space-x-2">
              <div
                onClick={() => {
                  dispatch({
                    type: SET_ACTIVE,
                    payload: p.catId,
                  });
                  router.push(`/explore/studio`);
                }}
                className="px-4 py-2"
              >
                <button className="font-pop-300 tracking-widest flex items-center space-x-4">
                  <span>{p.catName}</span>
                  <span></span>
                </button>
              </div>
              <div></div>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default explore;
