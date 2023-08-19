import React, { useState } from "react";
import { FaSchool } from "react-icons/fa";
import { MdGolfCourse } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";

const Inquiry = () => {
  const [data, setData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    city: "",
    state: "",
    courseName: "",
    lastschoolName: "",
    writeInquiry: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const onClear = () => {
    setData();
  };

  return (
    <>
      {/*==================================================desktop view ===================== */}

      <div className="hidden  xl:block">
        <div className="lg:px-12 px-5 py-5 ">
          <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
            Inquiry
          </h1>
        </div>

        {/*=======================================Inquiry form */}
        <form onSubmit={handleSubmit} className="bg-[#F0F0F0] ">
          <div className="flex flex-row space-x-20 items-center justify-center pt-10 pb-5 ">
            <div className="flex flex-col items-center justify-center">
              {/*===================================Full Name=================== */}
              <div className="relative   pb-10">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl- p-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.9896 4C10.7804 4 8.98956 5.79086 8.98956 8C8.98956 10.2091 10.7804 12 12.9896 12C15.1987 12 16.9896 10.2091 16.9896 8C16.9896 5.79086 15.1987 4 12.9896 4ZM6.98956 8C6.98956 4.68629 9.67585 2 12.9896 2C16.3033 2 18.9896 4.68629 18.9896 8C18.9896 11.3137 16.3033 14 12.9896 14C9.67585 14 6.98956 11.3137 6.98956 8ZM8.98956 18C7.33271 18 5.98956 19.3431 5.98956 21C5.98956 21.5523 5.54185 22 4.98956 22C4.43728 22 3.98956 21.5523 3.98956 21C3.98956 18.2386 6.22814 16 8.98956 16H16.9896C19.751 16 21.9896 18.2386 21.9896 21C21.9896 21.5523 21.5418 22 20.9896 22C20.4373 22 19.9896 21.5523 19.9896 21C19.9896 19.3431 18.6464 18 16.9896 18H8.98956Z"
                      fill="#B42120"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="fullName"
                  className=" font-Poppins   w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="Full Name"
                  tabIndex={1}
                  name="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*=====================================================full Name End======================= */}

              {/*===================================MobileNo=================== */}
              <div className=" relative  pb-10">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl-2 p-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 22 21"
                    fill="none"
                  >
                    <path
                      d="M3.14209 2H7.63203L9.07924 5.61803L6.75436 7.16795C6.47616 7.35342 6.30906 7.66565 6.30906 8C6.3116 8.09363 6.30906 8.001 6.30906 8.001L6.30907 8.00205L6.30907 8.00429L6.3091 8.00933L6.30925 8.02167C6.3094 8.03089 6.30965 8.04208 6.31007 8.05519C6.31092 8.0814 6.31245 8.1153 6.31519 8.15636C6.32066 8.23846 6.33097 8.34944 6.35036 8.48517C6.38912 8.75646 6.46434 9.12811 6.61038 9.56623C6.90362 10.4459 7.47979 11.5849 8.60196 12.7071C9.72412 13.8293 10.8631 14.4054 11.7428 14.6987C12.181 14.8447 12.5526 14.9199 12.8239 14.9587C12.9596 14.9781 13.0706 14.9884 13.1527 14.9939C13.1938 14.9966 13.2277 14.9981 13.2539 14.999C13.267 14.9994 13.2782 14.9997 13.2874 14.9998L13.2997 15L13.3048 15L13.307 15L13.3081 15C13.3081 15 13.4197 14.9939 13.3091 15C13.6878 15 14.0341 14.786 14.2035 14.4472L14.8732 13.1078L19.3091 13.8471V18.167C17.198 18.4723 11.4965 18.7732 7.01617 14.2929C2.53587 9.81259 2.83678 4.1111 3.14209 2ZM8.38271 8.48609L10.1886 7.28213C10.9756 6.75751 11.2874 5.75338 10.9362 4.87525L9.48898 1.25722C9.18526 0.497902 8.44984 0 7.63203 0H3.08984C2.18133 0 1.32615 0.631162 1.17701 1.6169C0.837697 3.8595 0.375849 10.481 5.60196 15.7071C10.8281 20.9332 17.4496 20.4714 19.6922 20.1321C20.6779 19.9829 21.3091 19.1277 21.3091 18.2192V13.8471C21.3091 12.8694 20.6022 12.0351 19.6379 11.8743L15.202 11.135C14.3359 10.9907 13.477 11.4281 13.0843 12.2134L12.7378 12.9064C12.6289 12.8796 12.5074 12.8453 12.3753 12.8013C11.755 12.5946 10.894 12.1707 10.0162 11.2929C9.13833 10.4151 8.71451 9.55407 8.50775 8.93377C8.45188 8.76616 8.41165 8.61545 8.38271 8.48609Z"
                      fill="#B42120"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <input
                  type="number"
                  id="mobileNo"
                  className=" font-Poppins  w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2.5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="MobileNo"
                  name="mobileNo"
                  tabIndex={2}
                  value={data.mobileNo}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*=====================================================MobileNo End======================= */}

              {/*===================================Email=================== */}
              <div className="relative   pb-10">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl-2 p-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M2.99652 6.5C2.99652 5.39543 3.89195 4.5 4.99652 4.5H20.9965C22.1011 4.5 22.9965 5.39543 22.9965 6.5V18.5C22.9965 19.6046 22.1011 20.5 20.9965 20.5H4.99652C3.89195 20.5 2.99652 19.6046 2.99652 18.5V6.5ZM6.51511 6.5L12.9965 12.1712L19.4779 6.5H6.51511ZM20.9965 7.82877L13.655 14.2526C13.278 14.5825 12.715 14.5825 12.338 14.2526L4.99652 7.82877V18.5H20.9965V7.82877Z"
                      fill="#B42120"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="email"
                  className="  font-Poppins w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="Email"
                  tabIndex={3}
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*=====================================================Email End======================= */}

              {/*===================================City=================== */}
              <div className="relative   pb-10">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl-2 p-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      d="M4.56401 2.74C5.80598 1.95498 7.28158 1.5 8.86456 1.5C13.2828 1.5 16.8646 5.04441 16.8646 9.41667C16.8646 14.8445 10.4646 20.5 8.86456 20.5C7.26456 20.5 0.864563 14.8445 0.864563 9.41667C0.864563 8.02506 1.2274 6.71732 1.86456 5.58103"
                      stroke="#B42120"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.7488 9.82816C11.8242 9.56512 11.8646 9.28727 11.8646 9C11.8646 7.34315 10.5214 6 8.86459 6C7.20774 6 5.86459 7.34315 5.86459 9C5.86459 10.6569 7.20774 12 8.86459 12C9.09467 12 9.31869 11.9741 9.53391 11.9251"
                      stroke="#B42120"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="city"
                  className=" font-Poppins  w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="City"
                  tabIndex={4}
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*=====================================================City End======================= */}
            </div>

            <div className="">
              {/*===================================State=================== */}
              <div className=" relative pb-10 ">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl-2 p-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      d="M4.56401 2.74C5.80598 1.95498 7.28158 1.5 8.86456 1.5C13.2828 1.5 16.8646 5.04441 16.8646 9.41667C16.8646 14.8445 10.4646 20.5 8.86456 20.5C7.26456 20.5 0.864563 14.8445 0.864563 9.41667C0.864563 8.02506 1.2274 6.71732 1.86456 5.58103"
                      stroke="#B42120"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.7488 9.82816C11.8242 9.56512 11.8646 9.28727 11.8646 9C11.8646 7.34315 10.5214 6 8.86459 6C7.20774 6 5.86459 7.34315 5.86459 9C5.86459 10.6569 7.20774 12 8.86459 12C9.09467 12 9.31869 11.9741 9.53391 11.9251"
                      stroke="#B42120"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="state"
                  className=" font-Poppins  w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="State"
                  tabIndex={5}
                  name="state"
                  value={data.state}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*=====================================================State End======================= */}

              {/*====================================================Course Name========================*/}
              <div className="relative  pb-10 ">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl-2 p-2 pointer-events-none">
                  <MdGolfCourse size={25} className="text-[#B42120] " />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="courseName"
                  className=" font-Poppins  w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="Course Name"
                  tabIndex={6}
                  name="courseName"
                  value={data.courseName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*====================================================Course End========================*/}

              {/*====================================================Last School Name========================*/}
              <div className="relative  pb-10">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl-2 p-2 pointer-events-none">
                  <FaSchool size={25} className=" text-[#B42120] " />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="lastschoolName"
                  className=" font-Poppins  w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="Last School Name"
                  tabIndex={7}
                  name="lastschoolName"
                  value={data.lastschoolName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/*====================================================Last School Name End========================*/}

              {/*====================================================Write Inquiry========================*/}
              <div className="relative  pb-10">
                <div className="absolute inset-x-0 left-[3px] flex items-center pl-2 p-2 pointer-events-none">
                  <BsMessenger size={25} className="text-[#B42120] " />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="29"
                    viewBox="0 0 2 29"
                    fill="none"
                    className="ml-[0.7rem]"
                  >
                    <path
                      d="M1.48956 0.5V28.5"
                      stroke="#B7B7B7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="writeInquiry"
                  className="resize-none font-Poppins  w-[412px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-14 "
                  placeholder="Write Inquiry End"
                  tabIndex={8}
                  name="writeInquiry"
                  value={data.writeInquiry}
                  onChange={handleChange}
                />
              </div>

              {/*====================================================Write Inquiry End========================*/}
            </div>
          </div>

          {/*==================================submit and cancel button==================== */}

          <div className="flex items-center justify-center space-x-5 pb-5">
            <button
              type="reset"
              onClick={onClear}
              className=" font-Poppins text-[14px] not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#FFA800] text-[#FFA800] px-8 py-2.5"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="text-[16px] font-Poppins not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#B42120] text-[#FFF] bg-[#B42120] px-8 py-2.5"
            >
              Submit
            </button>
          </div>
        </form>

        {/*==================================submit and cancel button==================== */}
      </div>

      {/*===================================================desktop end ======================= */}

      {/*====================================================Mobail view ========================== */}
      <div className=" block xl:hidden">
        <div className="lg:px-12 md:px-16 px-5 py-5 ">
          <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi text-[20px] lg:text-[32px] not-italic font-semibold leading-[normal]">
            Inquiry
          </h1>
        </div>

        {/*=======================================Inquiry form=============== */}
        <form onSubmit={handleSubmit} className=" bg-[#F0F0F0]  ">
          <div className="flex flex-col justify-between items-center  pt-5 pb-5 ">
            {/*===================================Full Name=================== */}
            <div className=" relative  pb-10">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl- p-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.9896 4C10.7804 4 8.98956 5.79086 8.98956 8C8.98956 10.2091 10.7804 12 12.9896 12C15.1987 12 16.9896 10.2091 16.9896 8C16.9896 5.79086 15.1987 4 12.9896 4ZM6.98956 8C6.98956 4.68629 9.67585 2 12.9896 2C16.3033 2 18.9896 4.68629 18.9896 8C18.9896 11.3137 16.3033 14 12.9896 14C9.67585 14 6.98956 11.3137 6.98956 8ZM8.98956 18C7.33271 18 5.98956 19.3431 5.98956 21C5.98956 21.5523 5.54185 22 4.98956 22C4.43728 22 3.98956 21.5523 3.98956 21C3.98956 18.2386 6.22814 16 8.98956 16H16.9896C19.751 16 21.9896 18.2386 21.9896 21C21.9896 21.5523 21.5418 22 20.9896 22C20.4373 22 19.9896 21.5523 19.9896 21C19.9896 19.3431 18.6464 18 16.9896 18H8.98956Z"
                    fill="#B42120"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <input
                type="text"
                id="fullName"
                className=" font-Poppins   w-[300px] h-[40px] md:w-[450px]  text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="Full Name"
                tabIndex={1}
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/*=====================================================full Name End======================= */}

            {/*===================================MobileNo=================== */}
            <div className=" relative  pb-10">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl-2 p-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <path
                    d="M3.14209 2H7.63203L9.07924 5.61803L6.75436 7.16795C6.47616 7.35342 6.30906 7.66565 6.30906 8C6.3116 8.09363 6.30906 8.001 6.30906 8.001L6.30907 8.00205L6.30907 8.00429L6.3091 8.00933L6.30925 8.02167C6.3094 8.03089 6.30965 8.04208 6.31007 8.05519C6.31092 8.0814 6.31245 8.1153 6.31519 8.15636C6.32066 8.23846 6.33097 8.34944 6.35036 8.48517C6.38912 8.75646 6.46434 9.12811 6.61038 9.56623C6.90362 10.4459 7.47979 11.5849 8.60196 12.7071C9.72412 13.8293 10.8631 14.4054 11.7428 14.6987C12.181 14.8447 12.5526 14.9199 12.8239 14.9587C12.9596 14.9781 13.0706 14.9884 13.1527 14.9939C13.1938 14.9966 13.2277 14.9981 13.2539 14.999C13.267 14.9994 13.2782 14.9997 13.2874 14.9998L13.2997 15L13.3048 15L13.307 15L13.3081 15C13.3081 15 13.4197 14.9939 13.3091 15C13.6878 15 14.0341 14.786 14.2035 14.4472L14.8732 13.1078L19.3091 13.8471V18.167C17.198 18.4723 11.4965 18.7732 7.01617 14.2929C2.53587 9.81259 2.83678 4.1111 3.14209 2ZM8.38271 8.48609L10.1886 7.28213C10.9756 6.75751 11.2874 5.75338 10.9362 4.87525L9.48898 1.25722C9.18526 0.497902 8.44984 0 7.63203 0H3.08984C2.18133 0 1.32615 0.631162 1.17701 1.6169C0.837697 3.8595 0.375849 10.481 5.60196 15.7071C10.8281 20.9332 17.4496 20.4714 19.6922 20.1321C20.6779 19.9829 21.3091 19.1277 21.3091 18.2192V13.8471C21.3091 12.8694 20.6022 12.0351 19.6379 11.8743L15.202 11.135C14.3359 10.9907 13.477 11.4281 13.0843 12.2134L12.7378 12.9064C12.6289 12.8796 12.5074 12.8453 12.3753 12.8013C11.755 12.5946 10.894 12.1707 10.0162 11.2929C9.13833 10.4151 8.71451 9.55407 8.50775 8.93377C8.45188 8.76616 8.41165 8.61545 8.38271 8.48609Z"
                    fill="#B42120"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <input
                type="number"
                id="mobileNo"
                className=" font-Poppins  w-[300px] h-[40px] md:w-[450px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="MobileNo"
                tabIndex={2}
                name="mobileNo"
                value={data.mobileNo}
                onChange={handleChange}
                required
              />
            </div>

            {/*=====================================================MobileNo End======================= */}

            {/*===================================Email=================== */}
            <div className="relative  pb-10">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl-2 p-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M2.99652 6.5C2.99652 5.39543 3.89195 4.5 4.99652 4.5H20.9965C22.1011 4.5 22.9965 5.39543 22.9965 6.5V18.5C22.9965 19.6046 22.1011 20.5 20.9965 20.5H4.99652C3.89195 20.5 2.99652 19.6046 2.99652 18.5V6.5ZM6.51511 6.5L12.9965 12.1712L19.4779 6.5H6.51511ZM20.9965 7.82877L13.655 14.2526C13.278 14.5825 12.715 14.5825 12.338 14.2526L4.99652 7.82877V18.5H20.9965V7.82877Z"
                    fill="#B42120"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <input
                type="text"
                id="email"
                className="  font-Poppins w-[300px] md:w-[450px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="Email"
                tabIndex={3}
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>

            {/*=====================================================Email End======================= */}

            {/*===================================City=================== */}
            <div className="relative  pb-10">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl-2 p-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 18 22"
                  fill="none"
                >
                  <path
                    d="M4.56401 2.74C5.80598 1.95498 7.28158 1.5 8.86456 1.5C13.2828 1.5 16.8646 5.04441 16.8646 9.41667C16.8646 14.8445 10.4646 20.5 8.86456 20.5C7.26456 20.5 0.864563 14.8445 0.864563 9.41667C0.864563 8.02506 1.2274 6.71732 1.86456 5.58103"
                    stroke="#B42120"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.7488 9.82816C11.8242 9.56512 11.8646 9.28727 11.8646 9C11.8646 7.34315 10.5214 6 8.86459 6C7.20774 6 5.86459 7.34315 5.86459 9C5.86459 10.6569 7.20774 12 8.86459 12C9.09467 12 9.31869 11.9741 9.53391 11.9251"
                    stroke="#B42120"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <input
                type="text"
                id="city"
                className=" font-Poppins  w-[300px] h-[40px] md:w-[450px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="City"
                tabIndex={4}
                name="city"
                value={data.city}
                onChange={handleChange}
                required
              />
            </div>

            {/*=====================================================City End======================= */}

            {/*===================================State=================== */}
            <div className=" relative  pb-6 ">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl-2 p-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 18 22"
                  fill="none"
                >
                  <path
                    d="M4.56401 2.74C5.80598 1.95498 7.28158 1.5 8.86456 1.5C13.2828 1.5 16.8646 5.04441 16.8646 9.41667C16.8646 14.8445 10.4646 20.5 8.86456 20.5C7.26456 20.5 0.864563 14.8445 0.864563 9.41667C0.864563 8.02506 1.2274 6.71732 1.86456 5.58103"
                    stroke="#B42120"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.7488 9.82816C11.8242 9.56512 11.8646 9.28727 11.8646 9C11.8646 7.34315 10.5214 6 8.86459 6C7.20774 6 5.86459 7.34315 5.86459 9C5.86459 10.6569 7.20774 12 8.86459 12C9.09467 12 9.31869 11.9741 9.53391 11.9251"
                    stroke="#B42120"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <input
                type="text"
                id="state"
                className=" font-Poppins  w-[300px] md:w-[450px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="State"
                name="state"
                value={data.state}
                onChange={handleChange}
                tabIndex={5}
                required
              />
            </div>

            {/*=====================================================State End======================= */}

            {/*====================================================Course Name========================*/}
            <div className=" relative  pb-6 ">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl-2 p-2 pointer-events-none">
                <MdGolfCourse size={25} className="text-[#B42120] " />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="courseName"
                className=" font-Poppins  w-[300px] md:w-[450px] h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="Course Name"
                name="courseName"
                value={data.courseName}
                onChange={handleChange}
                tabIndex={6}
                required
              />
            </div>

            {/*====================================================Course End========================*/}
            {/*====================================================Last School Name========================*/}
            <div className="relative  pb-6">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl-2 p-2 pointer-events-none">
                <FaSchool size={25} className="text-[#B42120]" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="lastschoolName"
                className=" font-Poppins  w-[300px] md:w-[450px]  h-[40px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="Last School Name"
                name="lastschoolName"
                value={data.lastschoolName}
                onChange={handleChange}
                tabIndex={7}
                required
              />
            </div>

            {/*====================================================Last School Name End========================*/}
            {/*====================================================Write Inquiry========================*/}
            <div className=" relative  pb-[34px]">
              <div className="absolute inset-x-0 left-[10px] md:left-[10px] flex items-center pl-2 p-2 pointer-events-none">
                <BsMessenger size={25} className="text-[#B42120] " />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="29"
                  viewBox="0 0 2 29"
                  fill="none"
                  className="ml-3 md:ml-3"
                >
                  <path
                    d="M1.48956 0.5V28.5"
                    stroke="#B7B7B7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <textarea
                type="text"
                id="writeInquiry"
                className="resize-none font-Poppins  w-[300px] md:w-[450px] h-[90px] text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-3 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7] block  pl-20 md:pl-20"
                placeholder="Write Inquiry End"
                name="writeInquiry"
                value={data.writeInquiry}
                onChange={handleChange}
                tabIndex={8}
                required
              />
            </div>

            {/*====================================================Write Inquiry End========================*/}
          </div>

          {/*==================================submit and cancel button==================== */}

          <div className="flex items-center justify-center space-x-5 pb-5">
            <button
              type="reset"
              onClick={onClear}
              className=" font-Poppins text-[14px] not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#FFA800] text-[#FFA800] px-8 py-2.5"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="text-[16px] font-Poppins not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#B42120] text-[#FFF] bg-[#B42120] px-8 py-2.5"
            >
              Submit
            </button>
          </div>
        </form>

        {/*==================================submit and cancel button==================== */}
      </div>

      {/*====================================================Mobail view end======================== */}
    </>
  );
};

export default Inquiry;
