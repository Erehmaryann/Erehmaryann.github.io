import React from "react";
import { sliderData } from "./data";

function Hero() {
  const [slide, setSlide] = React.useState<number>(0);

  const handleSlide = () => {
    if (slide < 2) {
      setSlide((prevState) => prevState + 1);
    } else setSlide(0);
  };

  React.useEffect(() => {
    const sliderTime = setTimeout(() => handleSlide(), 3000);
    return () => clearTimeout(sliderTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide]);

  return (
    <section
      id="hero"
      className="relative h-[100vh] w-screen flex justify-center"
    >
      <div className="absolute h-full w-full right-0 left-0">
        <img
          className="h-full object-cover"
          src={sliderData[slide].src}
          alt="hero bg-img"
        />
      </div>
      <div className="z-10 absolute flex h-full justify-end flex-col pb-[35px] items-start w-[55%]">
        <h1 className="text-[#fff] w-[45%] text-[2.6rem] font-bold leading-10 pl-1">
          {sliderData[slide].leadText}
        </h1>
        <p className="text-[#F6D021] w-[90%] pt-[21px] pb-[33px] text-[1rem] pl-1 my-3 bg-[rgba(0,0,0,0.5)]">
          {sliderData[slide].paragraph}
        </p>
        <p className="border-b-[3px] border-[#fff] w-[15%]"></p>
        <div className="flex justify-center items-center w-[100%] mt-[140px]">
          <span
            className={`${
              slide === 0 && "bg-[#F6D021]"
            } bg-white w-[10px] h-[10px] rounded-[50%]`}
          ></span>
          <span
            className={`${
              slide === 1 && "bg-[#F6D021]"
            } bg-white w-[10px] h-[10px] rounded-[50%] mx-2`}
          ></span>
          <span
            className={`${
              slide === 2 && "bg-[#F6D021]"
            } bg-white w-[10px] h-[10px] rounded-[50%]`}
          ></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
