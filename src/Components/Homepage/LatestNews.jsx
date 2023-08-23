import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const LatestNews = () => {
  const current = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = `${
    month[current.getMonth()]
  } ${current.getDate()}, ${current.getFullYear()}`;

  const [CalDate, setCalDate] = useState(new Date());
  return (
    <>
      {/*==============================================desktop view================ */}

      <div className="hidden lg:block">
        <div className="lg:px-10 px-5 py-5 ">
          <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
            Latest News
          </h1>
        </div>

        {/*  =================================  Latest News================================== */}
        <div className="flex flex-row space-x-10 items-center justify-center py-10">
          {/*====================== calender========================*/}
          <div className="relative  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="45"
              viewBox="0 0 140 45"
              fill="none"
            >
              <path
                d="M1 1H110.203L138 44H1V1Z"
                fill="#B42120"
                stroke="#B42120"
                stroke-width="2"
              />
            </svg>
            <div class="flex w-full text-[17px] font-inter items-center text-[#FFF] not-italic leading-normal font-semibold justify-center py-12 px-4 absolute  right-[34%] lg:right-[36%] -top-10">
              Calendar
            </div>

            <div className=" w-[330px] h-[312px] border-2  border-[#B42120] bg-[#FFF]">
              <Calendar onChange={setCalDate} value={CalDate} />
            </div>
          </div>

          {/*====================== calender end========================*/}

          {/* ===================== Curently=========================== */}
          <div className="flex-col space-y-10 items-center justify-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="187"
                height="45"
                viewBox="0 0 187 45"
                fill="none"
              >
                <path
                  d="M1 1H146.87L184 44H1V1Z"
                  fill="#B42120"
                  stroke="#B42120"
                  stroke-width="2"
                />
              </svg>
              <div class="flex w-full font-inter text-[17px] items-center text-[#FFF] not-italic leading-normal font-semibold  justify-center py-12 px-4 absolute  right-[28%]  -top-10">
                <h1>{date}</h1>
              </div>

              <div className="w-[360px] h-[67px] border-2  border-[#B42120] bg-[#FFF]">
                <div className="flex items-center justify-center">
                  <h2 className="text-[color:var(--02,#FFA800)] font-inter text-[22px] not-italic  font-semibol leading-normal pt-5">
                    {" "}
                    Currently No Event{" "}
                  </h2>
                </div>
              </div>
            </div>

            {/*====================up comming event================== */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="187"
                height="45"
                viewBox="0 0 187 45"
                fill="none"
              >
                <path
                  d="M1 1H146.87L184 44H1V1Z"
                  fill="#B42120"
                  stroke="#B42120"
                  stroke-width="2"
                />
              </svg>
              <div class="flex w-full text-[17px] items-center text-[#FFF] font-inter not-italic leading-normal font-semibold justify-center py-12 px-4  absolute right-[28%]  -top-10">
                Upcoming events
              </div>
              <div className=" w-[360px] h-[163px] border-2  border-[#B42120] bg-[#FFF]">
                <div className="flex items-center justify-center">
                  <ul class="list-disc py-3">
                    <li className="py-1 text-[color:var(--02,#FFA800)] text-[18px] font-inter not-italic  font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-1 text-[color:var(--02,#FFA800)] text-[18px] not-italic font-inter  font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-1 text-[color:var(--02,#FFA800)] text-[18px] not-italic font-inter font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-1 text-[color:var(--02,#FFA800)] text-[18px] not-italic font-inter font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*====================up comming event end================== */}
          </div>

          {/* ===================== Curently end=========================== */}

          {/*=====================================Latest News ================ */}
          <div className="relative ">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="45"
              viewBox="0 0 140 45"
              fill="none"
            >
              <path
                d="M1 1H110.203L138 44H1V1Z"
                fill="#B42120"
                stroke="#B42120"
                stroke-width="2"
              />
            </svg>
            <div class="flex w-full text-[17px] items-center text-[#FFF] not-italic leading-normal font-inter font-semibold justify-center py-12 px-4  absolute right-[32%]   -top-10">
              Latest News
            </div>

            <div className=" w-[360px] h-[312px] border-2  border-[#B42120] bg-[#FFF]">
              <div className="flex items-center justify-center">
                <ul class="list-disc py-5">
                  <li className="py-5 text-[#000] font-inter text-[18px] not-italic  font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-5 text-[#000] text-[18px] font-inter not-italic  font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-5 text-[#000] text-[18px] not-italic font-inter  font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-5 text-[#000] text-[18px] not-italic  font-inter font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*=====================================Latest News ================ */}
        </div>
      </div>

      {/*==============================================desktop view end ============== */}

      {/*================================================Mobaile view =================== */}
      <div className="block lg:hidden">
        <div className="lg:px-12 px-5 py-5 ">
          <h1 className=" text-[color:var(--01,#B42120)] text-[20px] lg:text-[32px] not-italic font-semibold font-KaiseiHarunoUmi leading-[normal]">
            Latest News
          </h1>
        </div>

        {/*  =================================  Latest News================================== */}
        <div className="flex flex-col space-y-10 items-center justify-center py-10 ">
          {/*====================== calender========================*/}
          <div className="relative  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="45"
              viewBox="0 0 140 45"
              fill="none"
            >
              <path
                d="M1 1H110.203L138 44H1V1Z"
                fill="#B42120"
                stroke="#B42120"
                stroke-width="2"
              />
            </svg>
            <div class="flex w-full text-[17px] font-inter items-center text-[#FFF] not-italic leading-normal font-semibold justify-center py-12 px-4 absolute  right-[36%] -top-10">
              Calendar
            </div>

            <div className=" w-[320px] h-[360px] md:w-[450px] border-2  border-[#B42120] bg-[#FFF]">
              <Calendar onChange={setCalDate} value={CalDate} />
            </div>
          </div>

          {/*====================== calender end========================*/}

          {/* ===================== Curently=========================== */}
          <div className="flex-col space-y-10 items-center justify-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="187"
                height="45"
                viewBox="0 0 187 45"
                fill="none"
              >
                <path
                  d="M1 1H146.87L184 44H1V1Z"
                  fill="#B42120"
                  stroke="#B42120"
                  stroke-width="2"
                />
              </svg>
              <div class="flex w-full font-inter text-[17px] items-center text-[#FFF] not-italic leading-normal font-semibold  justify-center py-12 px-4 absolute  right-[29%] md:right-[34%]  -top-10">
                Aug 8, 2023
              </div>

              <div className="w-[320px] md:w-[450px] h-[87px] border-2  border-[#B42120] bg-[#FFF]">
                <div className="flex items-center justify-center">
                  <h2 className="text-[color:var(--02,#FFA800)] font-inter text-[22px] not-italic  font-semibol leading-normal pt-5">
                    {" "}
                    Currently No Event{" "}
                  </h2>
                </div>
              </div>
            </div>

            {/*====================up comming event================== */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="187"
                height="45"
                viewBox="0 0 187 45"
                fill="none"
              >
                <path
                  d="M1 1H146.87L184 44H1V1Z"
                  fill="#B42120"
                  stroke="#B42120"
                  stroke-width="2"
                />
              </svg>
              <div class="flex w-full text-[17px] items-center text-[#FFF] font-inter not-italic leading-normal font-semibold justify-center py-12 px-4  absolute   right-[26%] md:right-[32%] -top-10">
                Upcoming events
              </div>
              <div className=" w-[320px] md:w-[450px] h-[193px] border-2  border-[#B42120] bg-[#FFF] ">
                <div className="flex items-center justify-center">
                  <ul class="list-disc py-5">
                    <li className="py-2 text-[color:var(--02,#FFA800)] text-[18px] font-inter not-italic  font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-2 text-[color:var(--02,#FFA800)] text-[18px] not-italic font-inter  font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-2 text-[color:var(--02,#FFA800)] text-[18px] not-italic font-inter font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="py-2 text-[color:var(--02,#FFA800)] text-[18px] not-italic font-inter font-semibol leading-normal underline">
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*====================up comming event end================== */}
          </div>

          {/* ===================== Curently end=========================== */}

          {/*=====================================Latest News ================ */}
          <div className="relative ">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="45"
              viewBox="0 0 140 45"
              fill="none"
            >
              <path
                d="M1 1H110.203L138 44H1V1Z"
                fill="#B42120"
                stroke="#B42120"
                stroke-width="2"
              />
            </svg>
            
            <div class="flex w-full text-[17px] items-center text-[#FFF] not-italic leading-normal font-inter font-semibold justify-center py-12 px-4  absolute   right-[30%] md:right-[34%] -top-10 md:top-[-8%]">
              Latest News
            </div>

            <div className=" w-[320px] md:w-[450px] h-[324px]  border-2  border-[#B42120] bg-[#FFF] ">
              <div className="flex items-center justify-center">
                <ul class="list-disc py-5">
                  <li className="py-5 text-[#000] font-inter text-[18px] not-italic  font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-5 text-[#000] text-[18px] font-inter not-italic  font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-5 text-[#000] text-[18px] not-italic font-inter  font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="py-5 text-[#000] text-[18px] not-italic  font-inter font-semibol leading-normal underline">
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*=====================================Latest News ================ */}
        </div>
      </div>

      {/*================================================Mobaile view end =================== */}
    </>
  );
};

export default LatestNews;
