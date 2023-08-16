import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Choosecard = () => {
  const WhyData = [
    {
      img: `/img/choose1.png`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose2.png`,
      title: `Means & Meritorious Scholarship To The Students.`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },

    {
      img: `/img/choose1 (3).png`,
      title: `Air Condition Library from 8:00 A.M. to 8:00 P.M.`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose4.png`,
      title: `Transportation Facility available from all the routes of Ahmedabad .`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose1.png`,
      title: `Boys & Girls Separate Hostel Facility available.`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose1.png`,
      title: `ATM Facility in the campus.`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },

    {
      img: `/img/choose1.png`,
      title: `Fees as per Fee Regulatory Committee`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose1.png`,
      title: `Research Project Grants for faculties & students.`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose1.png`,
      title: `Internet: 1 GBPS Internet with Fiber optics line / Wi-fi Campus`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose1.png`,
      title: `Placements: Project & Job Placement Assistance`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose1.png`,
      title: `Placement Partners :`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/choose1.png`,
      title: `MOU for Research & Development with well known Industries`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
  ];

  return (
    <>
      <div className="lg:px-12 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
          Why Choose NPCCSM
        </h1>
      </div>

      <div className="px-10 md:px-10 py-10 bg-[#B42120] flex items-center justify-center">
        <Swiper
          spaceBetween={30}
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
          // centeredSlides={true}
          autoplay={{
           delay: 2500,
           disableOnInteraction: false,
           }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="pt-5 pb-5 px-10 lg:px-10  flex items-center justify-center">
            {WhyData.map((data, index) => {
              return (
                <SwiperSlide>
                  <div className=" flex gap-y-2 flex-col w-[280px] md:w-[350px] lg:w-[300px]   max-h-[370px]  min-h-[370px] md:max-h-[370px] md:min-h-[370px] bg-white rounded-[10px] border shadow-[#898989] ">
                    <div className="p-5">
                      <img
                        src={data.img}
                        className="object-cover w-[30%]"
                        alt="card image"
                      />
                    </div>

                    <div className="px-4 py-2 ">
                      <h3 className=" font-work text-[22px] text-[#B42120] font-semibold leading-[32.5px]">
                        {" "}
                        {data.title}{" "}
                      </h3>
                    </div>
                    <div className="relative">
                      <div class="absolute  px-4 md:px-4 bottom-0 top-5 md:top-8 lg:top-10 left-0 ...">
                        <p className="  text-justify text-[14px] font-normal font-work leading-[19px] tracking-[-2.5%] text-[#898989]">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Choosecard;
