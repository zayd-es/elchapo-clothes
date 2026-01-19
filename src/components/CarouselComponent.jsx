import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import your images
import banner1 from "@/assets/banner 1.png";
import banner2 from "@/assets/banner 2.png";

const CarouselComponent = () => {
  const bannerImages = [banner1, banner2];

  return (
    <div className="w-full   ">
      <Carousel className="w-full">
        <CarouselContent>
          {bannerImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="w-full relative pt-[60%] sm:pt-[50%]  lg:h-[70vh]">
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover  shadow-lg"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-none shadow-lg" />
        <CarouselNext className="right-4  bg-white/90 hover:bg-white border-none shadow-lg" />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
