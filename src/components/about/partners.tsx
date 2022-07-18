import React from "react";
import { partnerData } from "./partner-data";

function Partners() {
  return (
    <section className="flex flex-col items-center w-full bg-black sm:p-4">
      <div className="py-[21px] md:text-center md:w-[300px]">
        <h3 className="font-[700] text-white py-[8px] text-[1.8rem]">
          Our Partners
        </h3>
        <p className="text-[#ff9c00] font-[500] text-[0.7rem]">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between pb-4">
        {partnerData.map((data) => (
          <div className="md:mx-8" key={data.id}>
            <img src={data.src} alt="partner-logo" width={150} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
