import React from "react";
import { Product } from "@/app/components/GetNewArrivals";
import ImageGallery from "@/app/components/ImageGallery";

import ProductDetails from "@/app/components/ProductDetails";
export async function generateStaticParams() {
  let res = await fetch("http://localhost:5000/api/account/getProducts", {
    cache: "force-cache",
  });
  let data = await res.json();

  return data.products.map((product: Product) => ({
    id: product._id,
  }));
}

export async function getProduct(id: string) {
  let res = await fetch(`http://localhost:5000/api/account/getProduct/${id}`, {
    cache: "force-cache",
  });
  let data = await res.json();

  return data.product;
}

export default async function Details({ params }: { params: { id: string } }) {
  let product = await getProduct(params.id);

  return (
    <div className="flex justify-center items-center gap-4 p-5 flex-wrap-reverse w-screen h-screen">
      <ImageGallery productImages={product.productImages} />
      <ProductDetails productDetails={product} />
    </div>
  );
}
