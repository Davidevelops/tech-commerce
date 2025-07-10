"use client";

import { useState, useEffect } from "react";
import { getNewArrivals } from "@/lib/api";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { PhilippinePeso } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
};

export default function GetNewArrivals() {
  const router = useRouter();
  const [arrivals, setArrivals] = useState<Product[]>([]);
  useEffect(() => {
    const getArrivals = async () => {
      const data = await getNewArrivals();
      setArrivals(data);
    };
    getArrivals();
  }, []);
  return (
    <div className="max-w-7xl container mx-auto px-4 py-10">
      <h1 className="text-center md:text-left text-3xl font-bold">
        New Arrivals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {arrivals &&
          arrivals.map((arrival, index) => (
            <Link
              href={`/productDetails/${arrival._id}`}
              key={index || arrival._id}
            >
              <div className="border p-3 flex flex-col items-center justify-center w-full h-full rounded-2xl shadow hover:shadow-lg transition-shadow">
                <div className="image-container w-full flex items-cener justify-center">
                  <Image
                    src={`${arrival.productImages[0]}`}
                    width={200}
                    height={300}
                    alt="product"
                  />
                </div>
                <div className="product-details p-3 w-full">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {arrival.productName}
                  </h1>
                </div>

                <div className="footer flex items-center mt-4 gap-3 p-3 w-full">
                  <h1 className="price font-bold flex gap-1 text-xl md:text-2xl items-center">
                    <PhilippinePeso size={20} />{" "}
                    {arrival.productPrice.toLocaleString()}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        <div
          className="border rounded-xl flex justify-center items-center gap-2 hover:cursor-pointer p-4"
          onClick={() => router.push("/shop")}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-600">
            See More
          </h1>
          <MoveRight size={30} className="sm:w-10 sm:h-10" color="gray" />
        </div>
      </div>
    </div>
  );
}
