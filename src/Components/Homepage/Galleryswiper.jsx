import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { RxDotFilled } from 'react-icons/rx';// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

const Galleryswiper = () => {
  const Data = [
    {
      imageSrc: "./img/ip10.png",
    },
    {
      imageSrc: "./img/ip11.png",
    },
    {
      imageSrc: "./img/ip3.png",
    },
    {
      imageSrc: "./img/it7.png",
    },
    {
      imageSrc: "./img/ip8.png",
    },
    {
      imageSrc: "./img/ip9.png",
    },
    {
      imageSrc: "./img/ip9.png",
    }, 
    {
      imageSrc: "./img/ip9.png",
    },  ];

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  return (
    <div className=" bg-[#D9D9D9]  pt-10 px-4  group ">
      <Swiper
        slidesPerView={ window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 3 : 1 }
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        pagination={{ el: ".swiper-paginationauto", clickable: true }}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.imageSrc}
              // newIndex={currentIndex}
              className="max-sm:w-[100%] w-full h-full rounded-2xl bg-center bg-cover "
              alt="card image"
            />
          </SwiperSlide>
        ))}
        <div className="pb-12 flex justify-center ">
          <div className="flex flex-row absolute gap-x-44 ">
            <div className="button-prev-slide  rounded-full  border-[2px] border-[#B42120]   text-[#B42120] cursor-pointer  ">
              <BsChevronLeft size={40} className=" rounded-full text-[#B42120] hover:bg-[#B42120] hover:text-[#fff]  p-2  " />
            </div>
            <div className="button-next-slide   rounded-full  border-[2px] border-[#B42120] text-[#B42120] cursor-pointer">
              <BsChevronRight size={40} className=" rounded-full text-[#B42120] hover:bg-[#B42120] hover:text-[#fff] p-2 "/>
            </div>
          </div>
          <div className="flex swiper-paginationauto  justify-center pt-4  text-[#FFA800] "></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Galleryswiper;
