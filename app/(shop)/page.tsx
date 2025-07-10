import MyCarousel from "../components/Carousel";
import GetNewArrivals from "../components/GetNewArrivals";
import CategoriesSection from "../components/Categories";
import TechBanner from "../components/CTA";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <MyCarousel />
      <GetNewArrivals />
      <CategoriesSection />
      <TechBanner />
    </div>
  );
}
