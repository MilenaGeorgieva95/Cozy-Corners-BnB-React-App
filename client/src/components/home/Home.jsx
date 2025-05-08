import LogoBar from "../Deals/LogoBar";
import TopDealsBar from "../Deals/TopDealsBar";

import FeaturedCars from "./featured-cars/FeaturedCars";
import Header from "./home-header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <FeaturedCars />
      <LogoBar />
      <TopDealsBar />
    </>
  );
}
