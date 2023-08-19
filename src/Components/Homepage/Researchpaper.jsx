import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Placement = () => {
  const Data = [
    {
      imgSrc: "/img/Rp1.png",
    },
    {
      imgSrc: "/img/Rp2.png",
    },
    {
      imgSrc: "/img/Rp3.png",
    },
    {
      imgSrc: "/img/Rp4.png",
    },
    {
      imgSrc: "/img/Rp5.png",
    },
  ];
  return (
    <div>
      <div className="lg:px-10 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
          Research Papers
        </h1>
      </div>
      <div className=" lg:flex py-4 justify-center gap-x-4 hidden ">
        <div className="card ">
          <img src="./img/Rp1.png" className="  " alt="" />
          <div className="info  ">
            <p className="font-semibold text-[22px] text-white font-KaiseiHarunoUmi ">
              Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
            </p>
            <p className=" text-[22px] text-white font-inter ">
              Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className="dateinfo">
            <p className=" text-[14px] text-white  font-inter  ">
              October 7,2022
            </p>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row gap-x-5">
            <div className="card1 ">
              <img src="./img/Rp2.png" className="  " alt="" />
              <div className="info  ">
                <p className="font-semibold text-[10px] text-white font-KaiseiHarunoUmi ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
                <p className=" text-[10px] text-white font-inter ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="dateinfo">
                <p className=" text-[10px] text-white   font-inter ">
                  October 7,2022
                </p>
              </div>
            </div>
            <div className="card1 ">
              <img src="./img/Rp3.png" className="  " alt="" />
              <div className="info  ">
                <p className="font-semibold text-[10px] text-white font-KaiseiHarunoUmi ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
                <p className=" text-[10px] text-white font-inter ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="dateinfo">
                <p className=" text-[10px] text-white  font-inter">
                  October 7,2022
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-5">
            <div className="card1 ">
              <img src="./img/Rp4.png" className="  " alt="" />
              <div className="info  ">
                <p className="font-semibold text-[10px] text-white font-KaiseiHarunoUmi ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
                <p className=" text-[10px] text-white font-inter ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="dateinfo">
                <p className=" text-[10px] text-white  font-inter  ">
                  October 7,2022
                </p>
              </div>
            </div>
            <div className="card1 ">
              <img src="./img/Rp5.png" className="  " alt="" />
              <div className="info  ">
                <p className="font-semibold text-[10px] text-white font-KaiseiHarunoUmi ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
                <p className=" text-[10px] text-white  font-inter ">
                  Lorem ipsum dolor sit amet,elit consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="dateinfo">
                <p className=" text-[10px] text-white  font-inter  ">
                  October 7,2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:py-10 px-7 lg:pt-10 scroll-smooth overflow-x-auto lg:hidden block   group  ">
        <Swiper
          spaceBetween={10}
          slidesPerView={
            window.innerWidth > 1024
              ? 4
              : window.innerWidth > 820
              ? 3
              : window.innerWidth > 640
              ? 2
              : window.innerWidth > 640
              ? 1
              : 1
          }
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
                <div className="lg:w-[90%]">
                  <img src={item.imgSrc} className="  " alt="" />
                </div>
              </SwiperSlide>
            </div>
          ))}
          <div className=" flex justify-center lg:pr-16 py-5 ">
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
      <div className="lg:flex hidden justify-end px-[5.7rem] py-3 pb-7">
        <button className=" font-Poppins  px-10 bg-[#B42120] rounded py-2.5 text-[color:var(--03,#F9F9F9)] text-center text-base not-italic font-medium leading-[93.833%] ">
          View More
        </button>
      </div>
    </div>
  );
};

export default Placement;
