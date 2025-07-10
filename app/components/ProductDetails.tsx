"use client";
import { Product } from "./GetNewArrivals";
import { Button } from "@/components/ui/button";
import { PhilippinePeso } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function ProductDetails({
  productDetails,
}: {
  productDetails: Product;
}) {
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();
  function cartToast() {
    toast.success("Added to cart successfully.", {
      style: {
        backgroundColor: "#6F2DBD",
        color: "white",
      },
    });
  }
  return (
    <div className="details-container w-[600px] flex flex-col gap-5 p-1">
      <h1 className="text-3xl md:text-5xl font-bold">
        {productDetails.productName}
      </h1>
      <p className="line-clamp-4 font-semibold">
        {productDetails.productDescription}
      </p>
      <h1 className="flex text-xl font-bold items-center">
        <PhilippinePeso />
        {productDetails.productPrice}
      </h1>

      <div className="properties-table mt-5 overflow-x-auto">
        <table className="w-full table-auto">
          <tbody>
            {productDetails.properties.map((property: any, index: number) => (
              <tr key={index}>
                <td className="px-4 py-2 font-bold">{property.name}</td>
                <td className="px-4 py-2">{property.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="buttons mt-5 gap-4 ">
        <Button
          className="w-full"
          variant={"outline"}
          onClick={() => {
            addToCart({
              _id: productDetails._id,
              name: productDetails.productName,
              price: productDetails.productPrice,
              description: productDetails.productDescription,
              image: productDetails.productImages[0],
            });
            cartToast();
          }}
        >
          Add to cart
        </Button>

        <Button
          className="w-full mt-2"
          onClick={() => {
            router.push("/cart");
            addToCart({
              _id: productDetails._id,
              name: productDetails.productName,
              price: productDetails.productPrice,
              description: productDetails.productDescription,
              image: productDetails.productImages[0],
            });
          }}
        >
          Buy now
        </Button>
      </div>
    </div>
  );
}
