"use server";
import Cart from "../components/Cart";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET_KEY;

export default async function CartPage() {
  const cookie = await cookies();
  const token = cookie.get("jwt")?.value;

  if (!token) redirect("/login");

  try {
    const decoded: any = jwt.verify(token, SECRET as string);

    if (decoded.role !== "user") redirect("/login");

    return (
      <div>
        <Cart />
      </div>
    );
  } catch (error) {
    console.error("JWT Verification failed: ", error);
    redirect("/login");
  }
}
