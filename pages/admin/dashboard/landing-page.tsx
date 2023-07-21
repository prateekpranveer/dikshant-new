import React from "react";
import Header from "@/components/Header";
import Top from "@/components/Top";
import Mid from "@/components/Mid";
import Bottom from "@/components/Bottom";
import { useRouter } from "next/router";

const LandingC = () => {
  const router = useRouter();
  const dark = false;
  return (
    <div>
      <div
        className={`${dark && "bg-dark-background text-dark-text h-screen"}`}
      >
        <Header />
        <div className="w-5/6 mx-auto">
          <div className="mt-12">
            <Top mode={false} />
          </div>
          <div className="mt-12">
            <Mid mode={false} />
          </div>
          <div className="mt-12">
            <Bottom mode={false} />
          </div>
        </div>

        <div className="fixed top-1/2 md:right-20 lg:right-40 transform -translate-y-1/2">
          <div
            onClick={() => router.push("/shop")}
            className="custom-vertical-text text-xl font-pop-300 tracking-widest"
          >
            <p> PURCHASE LIMITED COPIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingC;
