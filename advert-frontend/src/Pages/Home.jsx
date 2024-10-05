import React from "react";
import HeroSection from "../components/Hero";
import MissionSection from "../components/MissionSection/MissionSection";
import Locations from "../components/Locations/Locations";
import AdvertisingSolutions from "../components/AdvertisingSolutions/AdvertisingSolutions";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="mt-5">
        <MissionSection />
      </div>
      <hr />
      <Locations />
      <hr />
      <AdvertisingSolutions />
    </div>
  );
};

export default Home;
