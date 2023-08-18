import React from "react";
import Inquiry from "../Homepage/Inquiry";
import Slider from "../Slider/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Ncc = () => {
  const Data = [
    {
      imgSrc: "./img/npc1.png",
      imgSrc1: "./img/npc2.png",
    },
    {
      imgSrc: "./img/npc3.png",
      imgSrc1: "./img/npc4.png",
    },
    {
      imgSrc: "./img/npc5.png",
      imgSrc1: "./img/npc6.png",
    },
    {
      imgSrc: "./img/npc7.png",
      imgSrc1: "./img/npc8.png",
    },
    {
      imgSrc: "./img/npc9.png",
      imgSrc1: "./img/npc10.png",
    },
  ];
  return (
    <div>
      <div className="lg:px-12   pt-10 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi md:text-[25px]  text-[16px]  lg:text-[32px] not-italic font-semibold leading-[normal]">
          NCC
        </h1>
      </div>
      <Slider />
      <div className="">
        <p className="text-[16px] text-justify font-inter px-10 gap-y-3 ">
          NCC provides a suitable environment to motivate the youth to take up a
          career in the Armed Forces and Develop
          <br/>
          Character,Comradeship,Discipline
          ,Leadership,
          Secular Outlook, Spirit of
          Adventure and Ideals of Selfless Service among the Youth of the
          Country.      
          <br/>
     BPCCS is having 50 seats of NCC which is running under 9 BT
          Gujarat Ahmedabad, NCC.
          <br/>
     Cadets are having parade on every Monday.
     <br/>
          Every year Cadets have celebrated Kargil Vijay Diwas, Republic Day and
          Independence Day and have given their services in every college events
          and programme
          <br/>
           Cadets have attended Advance Leadership Camp, Basic
          Leadership Camp, National Integration Camp, CATC and NCC National
          Games.
        </p>
      </div>

      <Inquiry />
    </div>
  );
};

export default Ncc;

