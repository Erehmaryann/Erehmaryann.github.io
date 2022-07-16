import React from "react";
import services from "../../assets/services.png";

const Button = React.lazy(() => import("../common/button/button"));
const Feature = React.lazy(() => import("./feature"));
const Review = React.lazy(() => import("./review"));

function Services() {
  return (
    <section
      id="services"
      className="w-screen flex justify-center items-center dark:bg-[#6C6C6C] bg-[#FBFBFA] md:py-[100px]"
    >
      <div className="h-full w-full flex justify-center flex-col items-center sm:p-4 md:px-0 md:pb-0">
        <div className="flex justify-center items-center sm:flex-col-reverse md:flex-row md:w-[55%] md:mt-[0px] sm:mt-[35px]">
          <div className="md:w-[50%] sm:w-[100%] items-start sm:mt-[16px] md:h-auto sm:h-[70%]">
            <img
              src={services}
              alt="services"
              className="w-full md:h-auto sm:h-full md:mx-[-32px] md:mt-[-32px]"
            />
          </div>
          <div className="flex justify-center flex-col h-[40%] md:w-[45%] sm:w-[100%] sm:pb-8 md:mt-10 md:pl-[2.5rem]">
            <h3 className="text-[1.8rem] font-[700] text-[#333535] dark:text-[#fff]">
              Our Services
            </h3>
            <p className="text-[#6C6C6C] dark:text-white font-[500] text-[0.7rem] pt-2 leading-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution. <br /> <br />
              The point of using Lorem Ipsum is that it has.
            </p>
            <a href="/">
              <Button
                type="button"
                className="bg-[#D4AF37] drop-shadow-md   
                rounded-[10px] py-[14px] px-[30px] mt-[20px] text-white text-[0.8rem]"
              >
                View more
              </Button>
            </a>
          </div>
        </div>
        <Feature />
        <Review />
      </div>
    </section>
  );
}

export default Services;
