"use client";

import { useState, useEffect } from "react";
import { getNewArrivals } from "@/lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhilippinePeso } from "lucide-react";
import Image from "next/image";
export type Product = {
  _id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productImages: string[];
  productCategory: string;
  productSubCategory: string;
  properties: {
    _id: string;
    name: string;
    value: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export default function GetNewArrivals() {
  const [arrivals, setArrivals] = useState<Product[]>([]);
  useEffect(() => {
    const getArrivals = async () => {
      const data = await getNewArrivals();
      setArrivals(data);
    };
    getArrivals();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center md:text-left text-5xl font-bold">
        New Arrivals
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto gap-5 mt-10">
        {arrivals &&
          arrivals.map((arrival, index) => (
            <Link
              href={`/productDetails/${arrival._id}`}
              key={index || arrival._id}
            >
              <div className="border p-3 flex flex-col items-center justify-center w-full rounded-2xl shadow">
                <div className="image flex items-center justify-center">
                  {" "}
                  <Image
                    src={`${arrival.productImages[0]}`}
                    width={300}
                    height={400}
                    alt="product"
                  ></Image>
                </div>
                <div className="product-details p-3">
                  <h1 className="text-2xl font-bold">{arrival.productName}</h1>
                  <p className="line-clamp-2 leading-6 text-gray-600 font-semibold">
                    {arrival.productDescription}
                  </p>
                </div>

                <div className="footer flex items-center mt-4 gap-3 p-3">
                  <h1 className="price font-bold flex gap-1 text-2xl items-center">
                    <PhilippinePeso /> {arrival.productPrice.toLocaleString()}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
