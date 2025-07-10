import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Nav from "../components/Nav";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TechCommerce",
  description: "Gadgets E-Commerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Toaster position="top-center" />
        <Nav />
        <div className="pt-12">{children}</div>
      </body>
    </html>
  );
}
