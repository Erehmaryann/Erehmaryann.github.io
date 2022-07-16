import React from "react";
import { featureData } from "./feature-data";

function Feature() {
  return (
    <section className="flex flex-col items-center w-full md:py-[100px]">
      <div className="sm:pt-[32px] md:w-[55%] md:pt-0 pb-[35px] md:text-center">
        <h3 className="font-[500] text-[#000] dark:text-white pb-[8px] text-[1.8rem]">
          We have every feature you need
        </h3>
        <p className="text-[rgba(0, 0, 0, 0.86)] dark:text-white pt-2 font-[400] text-[0.7rem]">
          Providing easy viewing to the real-time status of your account, the
          Dashboard allows users to customize views, manage multiple account
          from one control panel.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-[55%] md:py-[40px]">
        <div className="flex flex-wrap justify-between">
          {featureData.map((data) => (
            <div key={data.id} className="flex flex-col md:mx-8 pb-10">
              <img src={data.src} width={30} alt={`${data.text}`} />
              <h6 className="dark:text-[#F6D021] text-[#23232B] font-[700] text-[0.7rem] pt-2">
                {data.text}
              </h6>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between">
          {featureData.map((data) => (
            <div key={data.id} className="flex flex-col md:mx-8 pb-10">
              <img src={data.src} width={30} alt={`${data.text}`} />
              <h6 className="dark:text-[#F6D021] text-[#23232B] font-[700] text-[0.7rem] pt-2">
                {data.text}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;