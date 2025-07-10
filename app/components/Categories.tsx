import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Gaming Console",
      imageSrc: "/assets/ps5_2.avif",
      altText: "Gaming Console",
      href: "/gaming_console",
    },
    {
      name: "Phone",
      imageSrc: "/assets/iPhone.webp",
      altText: "Phone",
      href: "/mobile",
    },
    {
      name: "Laptop",
      imageSrc: "/assets/macbook.png",
      altText: "Laptop",
      href: "/laptop",
    },
    {
      name: "Wearables",
      imageSrc: "/assets/airpodsmax.png",
      altText: "Wearables",
      href: "/wearables",
    },
    {
      name: "Tablet",
      imageSrc: "/assets/iPad_Pro_13_M4_Cellular_Silver_1.webp",
      altText: "Wearables",
      href: "/tablet",
    },
  ];

  return (
    <section className="mx-auto px-6 py-10 max-w-7xl  bg-gray-100 rounded-xl mt-10">
      <h2 className="text-2xl font-bold  mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <Link
            href={category.href}
            key={index}
            className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4">
              <Image
                src={category.imageSrc}
                alt={category.altText}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 640px) 64px, 80px"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
