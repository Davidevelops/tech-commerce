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
    <div className="max-w-[600px] min-w-[500px] overflow-clip">
      {" "}
      <div className="image-preview w-[400px] aspect-square relative mx-auto">
        <Image
          src={productImages[url]}
          alt="omsim"
          fill
          className="object-contain"
        />
      </div>
      <div className="product-images grid grid-cols-1 md:grid-cols-3  gap-2 ">
        {productImages &&
          productImages.map((img: string, index: number) => (
            <div className=" w-full relative aspect-square" key={index}>
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
