import { Product } from "@/app/components/GetNewArrivals";
import ImageGallery from "@/app/components/ImageGallery";
import ProductDetails from "@/app/components/ProductDetails";
import { getProduct } from "@/lib/getProduct";

// --- Static params for [id] route ---
export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/api/account/getProducts", {
    cache: "force-cache",
  });
  const data = await res.json();

  return data.products.map((product: Product) => ({
    id: product._id,
  }));
}

// --- Infer the correct param type from static params ---
type StaticParams = Awaited<ReturnType<typeof generateStaticParams>>[number];

export default async function Details({ params }: { params: StaticParams }) {
  const product = await getProduct(params.id);

  return (
    <div className="flex justify-center items-center gap-4 p-5 flex-wrap w-screen h-screen pt-36 md:pt-24 overflow-y-scroll">
      <ImageGallery productImages={product.productImages} />
      <ProductDetails productDetails={product} />
    </div>
  );
}
