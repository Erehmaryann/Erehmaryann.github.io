import React from "react";

function Policy() {
  return (
    <section className="bg-[#282828] w-full flex justify-center items-center sm:p-4">
      <div className="md:w-[65%] flex justify-between sm:flex-wrap md:flex-nowrap items-center">
        <h5 className="text-[#D3D3D3] text-[0.7rem] py-[10px]">
          Copyright © {new Date().getFullYear()} by JAM-Forte Technologies - All
          right reserved.
        </h5>
        <p className="text-[#D3D3D3] text-[0.7rem] py-[10px]">
          Terms & Conditions &nbsp; &nbsp; | &nbsp; &nbsp; Privacy Policy
        </p>
      </div>
    </section>
  );
}

export default Policy;
