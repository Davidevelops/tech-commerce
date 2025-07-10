"use client";

import { useState, useEffect } from "react";
import { getNewArrivals } from "@/lib/api";
import Link from "next/link";
import { MoveRight, PhilippinePeso, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <h1 className="text-center md:text-left text-3xl font-bold mb-10">
        New Arrivals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {arrivals.map((arrival, index) => (
          <Link
            href={`/productDetails/${arrival._id}`}
            key={index || arrival._id}
            className="group"
          >
            <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-200 relative">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={`${arrival.productImages[0]}`}
                  alt={arrival.productName}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/10">
                  <Button
                    size="sm"
                    className="gap-1.5 shadow-lg hover:scale-105 transition-transform hover:cursor-pointer"
                    onClick={() =>
                      router.push(`/productDetails/${arrival._id}`)
                    }
                  >
                    <ShoppingCart />
                    <span>Buy Now</span>
                  </Button>
                </div>
              </div>

              <CardContent className="p-3 space-y-1">
                <h3 className="text-sm font-medium leading-tight line-clamp-2">
                  {arrival.productName}
                </h3>
              </CardContent>

              <CardFooter className="p-3 pt-0">
                <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                  <PhilippinePeso className="h-3 w-3" />
                  <span>{arrival.productPrice.toLocaleString()}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}

        <div
          className="border-0 rounded-lg flex flex-col justify-center items-center gap-3 hover:cursor-pointer p-6 shadow-sm hover:shadow-md transition-shadow bg-gray-50"
          onClick={() => router.push("/shop")}
        >
          <h1 className="text-lg sm:text-xl text-gray-600 font-medium">
            View All Products
          </h1>
          <MoveRight size={24} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
