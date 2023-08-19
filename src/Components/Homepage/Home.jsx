import React from "react";
import Choosecard from "./Choosecard";
import Galleryswiper from "./Galleryswiper";
import StudentReviiews from "./StudentReviiews";
import Inquiry from "./Inquiry";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Placement from "./Placement";
import LatestNews from "./LatestNews";
import Researchpaper from "./Researchpaper";

const Home = () => {
  const Data = [
    {
      imgSrc: "/img/ik1.png",
    },
    {
      imgSrc: "/img/ik2.png",
    },
    {
      imgSrc: "/img/ik3.png",
    },
    {
      imgSrc: "/img/ik4.png",
    },
    {
      imgSrc: "/img/ik5.png",
    },
    {
      imgSrc: "/img/ik6.png",
    },
  ];
  return (
    <div>
      <div className="md:flex md:gap-x-7 md:px-7 lg:gap-x-20 px-5  lg:px-14 md:justify-between items-center ">
        <div className="flex flex-col lg:pl-10 py-5 lg:py-20 gap-y-1 ">
          <div>
            <h2 className="  text-[color:var(--01,#B42120)] text-[18px] lg:text-[33px] not-italic font-bold font-KaiseiHarunoUmi leading-[normal] ">
            Narsinhbhai Patel College 
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row">
            <h2 className=" text-[14px]  lg:text-[16px] text-[color:var(--02,#FFA800)] font-[inter] not-italic font-semibold leading-[normal] tracking-[0.21px] ">
              of Computer Studies and Management
            </h2>
            <h2 className=" text-[10px] lg:text-[11px] lg:px-1.5 pt-1 text-black  not-italic font-[inter] font-semibold leading-[normal] tracking-[0.21px] ">
              {" "}
              - A Constituent College of KSV
            </h2>
          </div>
          <div className="pt-3">
            <p className="text-black text-justify text-[12px] lg:text-[14px] not-italic py-2 font-[inter] font-normal leading-[174.023%] tracking-[0.475px] ">
              NPCCSM is constituent college of the University, Kadi
              Sarvavishwavidyalay, Gandhinagar. It imparts education in computer
              and management and offers two Programmes BCA and BBA.The
              University is unique in its own kind and takes credit of being the
              only one in Gujarat that has contributed towards creating the
              opportunity of studying in higher education available to the
              unexplored semi-urban area of North Gujarat.
            </p>
          </div>
        </div>
        <div className=" md:py-10 md:pt-20 lg:pt-10 scroll-smooth overflow-x-auto    group  ">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ el: ".swiper-paginationauto", clickable: true }}
          >
            {Data.map((item, index) => (
              <div key={index} className="">
                <SwiperSlide>
                  <div className=" lg:w-[90%]">
                    <img src={item.imgSrc} className="  " alt="" />
                  </div>
                </SwiperSlide>
              </div>
            ))}
            <div className=" flex justify-center lg:pr-16 py-4 ">
              <div className=" flex flex-row absolute gap-x-40">
                <div className="button-prev-slide  rounded-full  border-[2px] border-[#B42120]   text-[#B42120] cursor-pointer   ">
                  <BsChevronLeft
                    size={40}
                    className=" rounded-full text-[#B42120] hover:bg-[#B42120] hover:text-[#fff]  p-2  "
                  />
                </div>
                <div className="button-next-slide   rounded-full  border-[2px] border-[#B42120] text-[#B42120] cursor-pointer">
                  <BsChevronRight
                    size={40}
                    className=" rounded-full text-[#B42120] hover:bg-[#B42120] hover:text-[#fff] p-2 "
                  />
                </div>
              </div>
              <div className="flex swiper-paginationauto  justify-center pt-4 py-1  text-[#FFA800] "></div>
            </div>
          </Swiper>
        </div>
      </div>

      <Choosecard />

      <div className="lg:px-12 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
          Gallery
        </h1>
      </div>

      <Galleryswiper />
      <StudentReviiews />
      <LatestNews />
      <Placement />
      <Researchpaper />
    </div>
  );
};

export default Home;
