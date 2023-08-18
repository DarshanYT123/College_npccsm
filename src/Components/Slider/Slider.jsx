import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
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
  <div className=" md:py-10 md:pt-10 lg:pt-10 scroll-smooth overflow-x-auto    group  ">
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
            modules={[Navigation, Pagination,Autoplay]}
            pagination={{ el: ".swiper-paginationauto1", clickable: true }}
          >
            {Data.map((item, index) => (
              <div key={index} className="">
                <SwiperSlide>
                  <div className=" ">
                  <div className=" relative  ">
                    <img src={item.imgSrc1} className="blur-sm  " alt="" />
                    </div>
                    <img src={item.imgSrc} className=" absolute top-5 left-10 md:top-6 md:left-12 lg:top-12 flex justify-center items-center lg:left-36 w-[80%] " alt="" />
<h2 className="text-center text-[12px] md:text-[30px]  ">Welcome to Narsinhbhai Patel College of Computer Studies</h2>
                  </div>
                </SwiperSlide>
              </div>
            ))}
            <div className=" flex justify-center lg:pr-16 py-3 ">
              <div className=" flex flex-row absolute gap-x-40">
              </div>
              <div className="flex swiper-paginationauto1  justify-center pt-4 py-1  text-[#FFA800] "></div>
            </div>         
             </Swiper>
        </div>
    </div>
  );
};

export default Slider;

// NCC provides a suitable environment to motivate the youth to take up a career in the Armed Forces and Develop Character,Comradeship,Discipline,Leadership,Secular Outlook, Spirit of Adventure and Ideals of Selfless Service among the Youth of the Country.
// BPCCS is having 50 seats of NCC which is running under 9 BT Gujarat Ahmedabad, NCC.
// Cadets are having parade on every Monday.
// Every year Cadets have celebrated Kargil Vijay Diwas, Republic Day and Independence Day and have given their services in every college events and programme
// Cadets have attended Advance Leadership Camp, Basic Leadership Camp, National Integration Camp, CATC and NCC National Games.




// Volunteers works selflessly on “Don’t wait for the change, be the change”.
// BPCCS is running 1 unit (100 Volunteers) of NSS. Students is actively participating social activities like Blood Donation Camp, Medical Check up Camp, Thalassemia Awareness and Testing Camp.
// Every Year volunteers are celebrating Engineers Day, Aids Day, Women’s Day, Population Day, Ozone Day, Teachers Day and Sanvedna Saptaah.
// Volunteers are participating in 7 days residential camp in different village.
// Volunteers have participated in National Integration Camp, Pre Republic Day Camp and attended BHARTIYA CHATRA SANSAD Seminar.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque quis pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus. Curabitur scelerisque magna a interdum pretium. Integer sodales metus ut placerat viverra. Curabitur accumsan, odio quis vehicula imperdiet, tellus ex venenatis nisl, a dignissim lectus augue tincidunt arcu.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque