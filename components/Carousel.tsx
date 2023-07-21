import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";

const images = [
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
  "/12.jpg",
  "/13.jpg",
  "/12.jpg",
  "/13.jpg",
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mx-auto mt-8 relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-80 px-2">
            {" "}
            {/* Add custom styling here */}
            <Image
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <button className="shadow-xl absolute top-1/2 -translate-y-4 left-10 bg-white opacity-60 p-2 rounded-full">
        <ChevronLeft />
      </button>
      <button className="absolute top-1/2 -translate-y-4 right-10 bg-white opacity-60 p-2 rounded-full">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
