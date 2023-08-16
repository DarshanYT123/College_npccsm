import React from "react";

const Navbar1 = () => {
  return (
    <>
      
      {/*================================desktop view  ====================================*/}

      <div className="hidden xl:block">
      <div className="flex items-center justify-center   ">
        <h1 className="text-[18px] not-italic font-bold font-KaiseiHarunoUmi leading-normal text-[#B42120]">
          કર ભલા હોગા ભલા.{" "}
        </h1>
      </div>

      {/*===================main hedear ==========*/}

      <div className="flex flex-row  justify-between  items-center  px-11 ">
        <div className="flex flex-row  items-center">
          <a href="/" class="flex flex-row items-center ">
            <img
              src="./img/logo.jpg"
              className="w-[90px] h-[90px]"
              alt="logo"
            />
          </a>

          <div className="pb-5 pl-2">
            <h4 className="text-[14px] not-italic font-semibold font-[inter] leading-normal text-[#000000]">
              Sarva Vidyalaya Kelavani Mandal’s
            </h4>
            <h3 className="text-[17px] not-italic font-bold leading-normal font-[kaisei] text-[#B42120]">
              Narsinhbhai Patel College of Computer Studies and Management
            </h3>
            <h3 className="text-[14px] not-italic font-semibold font-inter leading-normal text-[#FFA800]">
              A Constituent College of KSV{" "}
              <span className="text-[14px] not-italic font-inter font-semibold leading-normal text-[#000000]">
                {" "}
                (NAAC Acredited with B+ Grade)
              </span>
            </h3>
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="flex flex-col ">
              <h1 className="text-[16px] not-italic font-semibold font-inter leading-normal tracking-[0.24px] text-[#B42120]">
                Who We Are?
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Administration
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Courses
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Syllabus
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Curriculum
              </h3>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Placements
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Activities
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>
          </div>
        </div>
      </div>

      </div>

      {/*======================================end desktop view============================= */}


      {/* ======================================Mobaile view =================================== */}
      <div className ="hidden lg:hidden">
      <div className="flex items-center justify-center   ">
        <h1 className="text-[18px] not-italic font-bold font-[Kaisei] leading-normal text-[#B42120]">
          કર ભલા હોગા ભલા.{" "}
        </h1>
      </div>

      {/*===================main hedear ==========*/}

      
      <div className="flex flex-col  space-x-14 items-center justify-center px-4">
        <div className="flex flex-col  items-center">
          <a href="/" class="flex flex-col items-center ">
            <img
              src="./img/logo.jpg"
              className="w-[90px] h-[90px]"
              alt="logo"
            />
          </a>

          <div className="pb-5 pl-1">
            <h4 className="text-[14px] not-italic font-semibold font-[inter] leading-normal text-[#000000]">
              Sarva Vidyalaya Kelavani Mandal’s
            </h4>
            <h3 className="text-[16px] not-italic font-bold leading-normal font-[kaisei] text-[#B42120]">
              Narsinhbhai Patel College of Computer Studies and Management
            </h3>
            <h3 className="text-[14px] not-italic font-semibold font-inter leading-normal text-[#FFA800]">
              A Constituent College of KSV{" "}
              <span className="text-[14px] not-italic font-semibold leading-normal text-[#000000]">
                {" "}
                (NAAC Acredited with B+ Grade)
              </span>
            </h3>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <h1 className="text-[16px] not-italic font-semibold font-inter leading-normal tracking-[0.24px] text-[#B42120]">
                Who We Are?
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Administration
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 hidden"
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Courses
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 hidden"
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Syllabus
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Curriculum
              </h3>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 hidden"
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Placements
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 hidden "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal font-inter tracking-[0.24px] text-[#B42120]">
                Activities
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal font-inter tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>
          </div>
        </div>
      </div>

      </div>


      {/*==========================================end mobail viwe================================ */}
    </>
  );
};

export default Navbar1;
