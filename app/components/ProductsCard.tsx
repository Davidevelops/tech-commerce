import Link from "next/link";
import { PhilippinePeso } from "lucide-react";
import Image from "next/image";
import { Product } from "./GetNewArrivals";

interface CardProps {
  product: Product;
  index: number;
}

export default function ProductsCard({ product, index }: CardProps) {
  return (
    <Link href={`/productDetails/${product._id}`} key={index || product._id}>
      <div className="border p-3 flex flex-col items-center justify-center w-full h-full rounded-2xl shadow hover:shadow-lg transition-shadow">
        <div className="image-container w-full flex items-cener justify-center">
          <Image
            src={`${product.productImages[0]}`}
            width={200}
            height={300}
            alt="product"
          />
        </div>
        <div className="product-details p-3 w-full">
          <h1 className="text-xl md:text-2xl font-bold">
            {product.productName}
          </h1>
        </div>

        <div className="footer flex items-center mt-4 gap-3 p-3 w-full">
          <h1 className="price font-bold flex gap-1 text-xl md:text-2xl items-center">
            <PhilippinePeso size={20} /> {product.productPrice.toLocaleString()}
          </h1>
        </div>
      </div>
    </Link>
  );
}
