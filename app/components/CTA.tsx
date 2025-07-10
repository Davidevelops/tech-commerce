"use client";
import React, { useEffect } from "react";
import Head from "next/head";
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
      <Head>
        <title>TechSphere - Premium Gadgets</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="banner-gradient rounded-2xl overflow-hidden max-w-7xl w-full glow-effect">
          <div className="flex flex-col md:flex-row">
            {/* Text Content */}
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
                <button className="btn-hover bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(145,70,255,0.4)]">
                  Shop Now
                </button>
                <button className="btn-hover bg-transparent border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                  View Collection
                </button>
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

            {/* Image Illustration */}
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

      {/* Global Styles */}
      <style jsx global>{`
        .banner-gradient {
          background: linear-gradient(135deg, #111111 0%, #2d1e3a 100%);
        }
        .glow-effect {
          box-shadow: 0 0 15px rgba(145, 70, 255, 0.5);
        }
        .device-illustration {
          background: radial-gradient(
            circle at center,
            rgba(145, 70, 255, 0.1) 0%,
            transparent 70%
          );
        }
        @media (max-width: 768px) {
          .banner-content {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .device-illustration {
            margin-top: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default TechBanner;
