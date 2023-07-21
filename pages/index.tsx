import Bottom from "@/components/Bottom";
import Mid from "@/components/Mid";
import Top from "@/components/Top";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import { useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch();

  const dark = false;
  const router = useRouter();

  // useEffect(() => {
  //   const allImages = async() => [
  //     await axios.get('/image/getallimg/')
  //   ]
  // }, [])

  return (
    <div className={`${dark && "bg-dark-background text-dark-text h-screen"}`}>
      <Header />
      <div className="w-5/6 mx-auto">
        <div className="mt-12">
          <Top mode={true} />
        </div>
        <div className="mt-12">
          <Mid mode={true} />
        </div>
        <div className="mt-12">
          <Bottom mode={true} />
        </div>
      </div>

      <div className="fixed top-1/2 md:right-20 lg:right-40 transform -translate-y-1/2">
        <div
          onClick={() => router.push("/shop")}
          className="relative custom-vertical-text text-xl font-pop-300 tracking-widest"
        >
          <p> PURCHASE LIMITED COPIES</p>
        </div>
        <button onClick={() => router.push('/aboutme')} className="absolute right-40 w-40 shadow-xl px-4 py-6 rounded-3xl tracking-widest bg-yellow-400 font-pop-300 "><h1>ABOUT ME</h1></button>
      </div>
    </div>
  );
};

export default index;
