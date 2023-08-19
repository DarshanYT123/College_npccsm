import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Placement = () => {
  const Company = [
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
  ];
  return (
    <div>
      <div className="lg:px-12 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] text-[20px] lg:text-[32px] font-KaiseiHarunoUmi not-italic font-semibold leading-[normal]">
          Placement Partners
        </h1>
      </div>
      <div className="px-10 md:px-10 py-10  flex items-center justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={
            window.innerWidth > 1024 ? 6 : window.innerWidth > 640 ? 2 : 1
          }
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="pt-5 pb-5 px-10  flex items-center justify-center">
            {Company.map((item, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="w-full h-20 lg:w-32 lg:h-20">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Placement;
