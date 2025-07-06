"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/cartStore";
import { logOut } from "@/lib/authentication";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export default function Nav() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  async function handleLogout() {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <header className="flex justify-between items-center p-3 bg-gray-950 text-white fixed w-screen z-2 ">
      <h1>E-Commerce</h1>
      <nav className="flex gap-4 justify-center items-center font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={""}>Shop</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <div className="shoppingCart flex  relative me-5">
        <Badge variant={"destructive"} className="absolute rounded-full">
          {cart.length}
        </Badge>
        <Link href={"/cart"} className="rounded-full p-3">
          <ShoppingCart />
        </Link>
        <Popover>
          <PopoverTrigger>Account</PopoverTrigger>
          {/* <Button onClick={handleLogout} type="button">
            <LogOut />
            Log Out
          </Button> */}
          <PopoverContent onClick={handleLogout} className="flex gap-2">
            {" "}
            <LogOut />
            Log Out
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
