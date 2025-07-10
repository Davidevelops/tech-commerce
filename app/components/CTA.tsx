"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const TechBanner = () => {
  useEffect(() => {
    const banner = document.querySelector(".banner-gradient") as HTMLElement;
    if (banner) {
      banner.style.opacity = "0";
      banner.style.transform = "translateY(20px)";

      setTimeout(() => {
        banner.style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        banner.style.opacity = "1";
        banner.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4 ">
        <div className=" rounded-2xl overflow-hidden max-w-7xl w-full  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
          <div className="flex flex-col md:flex-row">
            <div className="banner-content p-10 lg:p-16 flex flex-col justify-center md:w-1/2">
              <span className="text-purple-400 font-medium text-sm uppercase tracking-wider mb-2">
                Limited Time Offer
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Upgrade Your Tech Game
              </h1>
              <p className="text-gray-300 mb-8">
                Discover our premium collection of cutting-edge gadgets designed
                for tech enthusiasts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  className="btn-hover bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(145,70,255,0.4)]"
                  href={"/productDetails/685ebf59952e114edf6aaefd"}
                >
                  Shop Now
                </Link>
                <Link
                  href={"/laptop"}
                  className="btn-hover bg-transparent border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  View Collection
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  <span className="text-gray-400 text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  <span className="text-gray-400 text-sm">1-Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="device-illustration md:w-1/2 flex items-center justify-center p-8 lg:p-12">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/assets/macbook.png"
                  alt="Modern gadget collection"
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechBanner;
