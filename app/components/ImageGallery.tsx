"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
export default function ImageGallery({
  productImages,
}: {
  productImages: string[];
}) {
  const [url, setUrl] = useState<number>(0);
  return (
    <div className="min-w-[200px] overflow-clip ">
      {" "}
      <div className="image-preview w-[250px] md:w-[500px] aspect-square relative mx-auto">
        <Image
          src={productImages[url]}
          alt="omsim"
          fill
          className="object-contain"
        />
      </div>
      <div className="product-images grid grid-cols-3">
        {productImages &&
          productImages.map((img: string, index: number) => (
            <div
              className="w-[80px] md:w-[150px] relative aspect-square border rounded hover:cursor-pointer"
              key={index}
            >
              <Image
                src={img}
                fill
                alt="product"
                key={index}
                className="object-contain"
                onClick={() => setUrl(index)}
              ></Image>
            </div>
          ))}
      </div>
    </div>
  );
}
