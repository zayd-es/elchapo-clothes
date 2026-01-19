import React from "react";
import NewArrivals from "./NewArrivals";
import Headlines from "./Headlines";
import AOS from "aos";
import TrustBar from "./TrustBar";
import About from "./About";
AOS.init();

const Home = () => {
  return (
    <div className="space-y-20 pb-20" data-aos="zoom-in">
      <TrustBar />
      <div>
        <Headlines title={"new arrivals"} />
      </div>
      <div>
        <div className="w-full mx-auto">
          <NewArrivals />
        </div>
        <About />
      </div>
    </div>
  );
};

export default Home;
