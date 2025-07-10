"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import { logOut } from "@/lib/authentication";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <nav className="hidden md:flex gap-4 justify-center items-center font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/cart"}>Cart</Link>
        <Link href={"/orders"}>Orders</Link>
      </nav>
      <div className="flex me-5 gap-3">
        {/* Navigation borger */}
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden">
            <Menu color="white" size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href={""}>Shop</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={""}>About Us</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={""}>Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Accounts settings */}
        <DropdownMenu>
          <DropdownMenuTrigger className="">
            <CircleUserRound size={30} className="hover:cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="relative flex items-center gap-2">
                <Link href={"/cart"} className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> {/* Fixed size */}
                  <span>Cart</span>
                </Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/orders"}>Orders</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
