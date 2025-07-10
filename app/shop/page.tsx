"use client";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/lib/api";

import ProductsCard from "../components/ProductsCard";
import { useRouter } from "next/navigation";
import { Product } from "../components/GetNewArrivals";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="max-w-7xl container mx-auto px-4 py-10">
      <h1 className="text-center md:text-left text-3xl font-bold">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {products &&
          products.map((product, index) => (
            <ProductsCard product={product} index={index} />
          ))}
      </div>
    </div>
  );
}
