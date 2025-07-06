import Image from "next/image";
import Nav from "./components/Nav";
import MyCarousel from "./components/Carousel";
import GetNewArrivals from "./components/GetNewArrivals";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <MyCarousel />
      <GetNewArrivals />
    </div>
  );
}
