import { geNewArrivalsProducts } from "@/getData/Product";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import NewArrivalsCard from "./NewArrivalsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Loading from "./Loading";

const NewArrivals = () => {
  const [newArrivals, setNewArrivalsProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetNewArrivalsProducts = async () => {
      setLoading(true);
      const { error, success } = await geNewArrivalsProducts();
      setLoading(false);
      if (success) {
        setNewArrivalsProducts(success.data);
      }
      if (error) {
        // Handle error
      }
    };
    handleGetNewArrivalsProducts();
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <Swiper
            observer={true}
            observeParents={true}
            observeSlideChildren={true}
            className="pl-4"
            centeredSlides={true}
            modules={[Navigation, Scrollbar]}
            // loop={true}
            navigation={{
              nextEl: ".custom-next-newarrivals",
              prevEl: ".custom-prev-newarrivals",
            }}
            scrollbar={{
              el: ".swiper-scrollbar-newarrivals",
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              320: {
                centeredSlides: true,
                slidesPerView: 1.25,
                spaceBetween: 15,
              },
              // when window width is >= 640px
              590: {
                centeredSlides: false,
                slidesPerView: 2.25,
                slidesOffsetBefore: 25,

                spaceBetween: 30,
              },
              // when window width is >= 748px

              848: {
                centeredSlides: false,
                slidesPerView: 3.25,
                slidesOffsetBefore: 25,

                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                centeredSlides: false,
                slidesPerView: 4.3,
                slidesOffsetBefore: 15,

                spaceBetween: 30,
              },
            }}
          >
            <div className="">
              {newArrivals && newArrivals.length > 0 ? (
                newArrivals.map((product) => (
                  <SwiperSlide key={product.id}>
                    <NewArrivalsCard product={product} isNew={true} />
                  </SwiperSlide>
                ))
              ) : (
                <p>Loading products...</p>
              )}
            </div>
          </Swiper>
          <div className="w-full flex-col  md:flex items-center mt-6  justify-between">
            <div className=" h-1 w-full ml-4  swiper-scrollbar-newarrivals  rounded-3xl bg-gray-900  "></div>
            <div className=" flex pt-4  items-center  justify-center gap-5 cursor-pointer  text-4xl ">
              <FaArrowCircleLeft className="border-3  custom-prev-newarrivals  border-white ease-in-out duration-150   rounded-[50%]" />

              <FaArrowCircleRight className="border-3  custom-next-newarrivals ease-in-out duration-150   border-white rounded-[50%]" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewArrivals;
