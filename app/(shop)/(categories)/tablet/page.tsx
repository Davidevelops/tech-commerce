"use client";
import { useState, useEffect } from "react";
import { getTablet } from "@/lib/api";
import { Product } from "@/app/components/GetNewArrivals";
import ProductsCard from "@/app/components/ProductsCard";
export default function Tablet() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      let data = await getTablet();
      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <div className="max-w-7xl container mx-auto px-4 py-10">
      <h1 className="text-center md:text-left text-3xl font-bold mt-12">
        Tablet Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {products ? (
          products.map((product, index) => (
            <ProductsCard key={product._id} product={product} index={index} />
          ))
        ) : (
          <>no products</>
        )}
      </div>
    </div>
  );
}
