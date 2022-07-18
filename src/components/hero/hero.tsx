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

  const Span = ({ pin }: any) => (
    <span
      className={`${
        slide === pin ? "bg-[#ff9c00]" : "bg-white"
      } ml-[10px] w-[10px] h-[10px] rounded-[50%]`}
    />
  );

  return (
    <section
      id="hero"
      className="relative h-[100vh] w-screen flex justify-center"
    >
      <div className="absolute left-0 right-0 w-full h-full">
        <img
          className="object-cover h-full"
          src={sliderData[slide].src}
          alt="hero bg-img"
        />
      </div>
      <div className="z-10 absolute flex h-full justify-end flex-col pb-[35px] items-start md:w-[55%] sm:p-4 md:p-0">
        <h1 className="text-[#fff] md:w-[45%] text-[2.6rem] font-bold leading-10 pl-1">
          {sliderData[slide].leadText}
        </h1>
        <p className="text-[#ff9c00] md:w-[90%] pt-[21px] pb-[33px] text-[1rem] pl-1 my-3 bg-[rgba(0,0,0,0.5)]">
          {sliderData[slide].paragraph}
        </p>
        <p className="border-b-[3px] border-[#fff] w-[15%]"></p>
        <div className="flex justify-center items-center w-[100%] mt-[140px] mb-10">
          {sliderData.map((data) => (
            <Span key={data.id} pin={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
