"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
export default function MyCarousel() {
  const slideContents = [
    {
      name: "iPhone 16 Pro",
      desc: "Experience the future with the all-new iPhone 16 — stunning display, lightning-fast performance, and breakthrough camera technology.",
      path: "/assets/iPhone.webp",
    },
    {
      name: "MacBook Pro M3",
      desc: "Power up your productivity with the new MacBook Pro M3 — ultra-efficient, beautifully designed, and built for creators and pros.",
      path: "/assets/MacBook.png",
    },
    {
      name: "AirPods Max",
      desc: "Immerse yourself in premium sound with AirPods Pro — advanced noise cancellation, spatial audio, and all-day comfort.",
      path: "/assets/airpodsmax.png",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="bg-gray-950"
    >
      {slideContents.map((content, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center p-4">
            <div className="details-container  w-[800px]">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-18">
                {content.name}
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl  text-gray-200 mt-1">
                {content.desc}
              </p>
              {/* <div className="button-container mt-2 flex gap-1">
                {" "}
                <Button className="bg-purple-900 hover:bg-purple-700 text-sm">
                  Buy now
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-900 text-white bg-transparent hover:text-purple-950"
                >
                  View Details
                </Button>
              </div> */}
            </div>
            <Image
              src={content.path}
              width={500}
              height={600}
              alt="product"
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[500px] mt-12"
            ></Image>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
