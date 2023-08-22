import React from "react";
// import Inquiry from "../Homepage/Inquiry";
// import Slider from "../Slider/Slider";
import Hero from "../VericalSlider/Hero";
import Placement from "../Homepage/Placement";
import PlacedStudent from "./PlacedStudent";

const PlacementPartner = () => {
  return (
    <div>
      <div className="lg:px-12   pt-10 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi md:text-[25px]  text-[16px]  lg:text-[32px] not-italic font-semibold leading-[normal]">
          Placement
        </h1>
      </div>
      <Hero /> 
      <div className="mt-5">
        <p className="text-[16px] font-inter px-14 text-justify  not-italic font-medium leading-[202.523%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
          aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id
          sapien. Vestibulum malesuada orci sit amet pretium facilisis. In
          lobortis congue augue, a commodo libero tincidunt scelerisque. Donec
          tempus congue lacinia. Phasellus lacinia felis est, placerat commodo
          odio tincidunt iaculis. Sed felis magna, iaculis a metus id,
          ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere
          porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa.
          Proin nulla augue, dapibus non justo in, laoreet commodo nunc.
          Maecenas faucibus neque in nulla mollis interdum. Quisque quis
          pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus.
          Curabitur scelerisque magna a interdum pretium. Integer sodales metus
          ut placerat viverra. Curabitur accumsan, odio quis vehicula imperdiet,
          tellus ex venenatis nisl, a dignissim lectus augue tincidunt arcu.
        </p>
      </div>
      <div className="flex  px-14 py-7">
        <div className=" flex flex-col md:flex-col lg:flex-row md:gap-x-10">
          <div className="lg:w-[35%]  ">
            <img src="./img/placementp1.png" className="" alt="" />
          </div>
          <div className="flex flex-col py-10 lg:w-[65%]">
            <h1 className=" py-2 underline text-[color:var(--01,#B42120)] lg:pt-0 md:pt-8 font-KaiseiHarunoUmi md:text-[25px]  text-[16px]  lg:text-[32px] not-italic font-semibold leading-[normal]">
                Ajay Singh 
            </h1>
            <h2 className=" text-[14px]  lg:text-[16px] text-[color:var(--02,#FFA800)] font-[inter] not-italic font-semibold leading-[normal] tracking-[0.21px] ">
              Placement Director
            </h2>
            <p className="text-[16px]  font-inter  text-justify  pt-5 not-italic font-medium leading-[202.523%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis est, placerat commodo odio tincidunt iaculis. Sed felis magna, iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa. Proin nulla augue, dapibus non justo in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis interdum. Quisque            </p>
          </div>
        </div>
      </div>
<Placement />
<div className="lg:px-12   pt-10 px-5 py-5">
        <h1 className=" text-[color:var(--01,#B42120)] font-KaiseiHarunoUmi md:text-[25px]  text-[16px]  lg:text-[32px] not-italic font-semibold leading-[normal]">
          Placed Student
        </h1>
      </div>
<PlacedStudent />

    </div>
  );
};

export default PlacementPartner;

