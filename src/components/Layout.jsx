import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import ScrollToTop from "./ScrollToTop";
import Aos from "aos";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Refresh AOS every time we change pages
    Aos.refresh();
  }, [pathname]);

  return (
    <div className="relative">
      {/* 1. Navbar stays OUTSIDE the animated div so it stays fixed */}
      <Navbar />
      <ScrollToTop />

      {/* 2. Wrap only the content you want to animate */}
      <div data-aos="zoom-in" className="overflow-hidden">
        <CarouselComponent />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
