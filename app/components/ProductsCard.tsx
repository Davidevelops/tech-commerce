import Link from "next/link";
import { PhilippinePeso, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Product } from "./GetNewArrivals";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  product: Product;
  index: number;
}

export default function ProductsCard({ product, index }: CardProps) {
  return (
    <Link
      href={`/productDetails/${product._id}`}
      key={index || product._id}
      className="group focus-visible:outline-none"
    >
      <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-200 relative">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={`${product.productImages[0]}`}
            alt={product.productName}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10">
            <Button
              size="sm"
              className="gap-1.5 shadow-lg hover:scale-105 transition-transform hover:cursor-pointer"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              <span>Buy Now</span>
            </Button>
          </div>
        </div>

        <CardContent className="p-3 space-y-1">
          <h3 className="text-sm font-medium leading-tight line-clamp-2">
            {product.productName}
          </h3>
        </CardContent>

        <CardFooter className="p-3 pt-0">
          <div className="flex items-center gap-1 text-sm font-semibold text-primary">
            <PhilippinePeso className="h-3 w-3" />
            <span>{product.productPrice.toLocaleString()}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
