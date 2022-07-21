import React from "react";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import toTop from "../../assets/svg/to-top-icon.svg";

const Button = React.lazy(() => import("../common/button/button"));

function ContactUs() {
  return (
    <section className="relative bg-[#333535] w-full flex justify-center items-center sm:px-4 sm:py-8 md:py-[100px]">
      <div className="md:w-[65%] flex justify-between sm:flex-wrap md:flex-nowrap items-center">
        <div className="flex flex-col items-start justify-center md:w-[40%]">
          <p className="text-[0.7rem] font-[500] text-[#D3D3D3] pb-4">
            Since 1987 established fact that a reader will be distracted by the
            readable content of a page.
          </p>
          <div className="flex flex-wrap">
            <a
              href="https://facebook.com/jamfortetechnologies"
              rel="noopener noreferrer"
              target="_blank"
              className="md:mb-2"
            >
              <img src={facebook} width={39} alt="facebook" />
            </a>
            <a
              href="https://twitter.com/jamfortetech"
              rel="noopener noreferrer"
              target="_blank"
              className="pl-4 md:mb-2"
            >
              <img src={twitter} width={39} alt="twitter" />
            </a>
            <a
              href="https://instagram.com/jamfortetech"
              rel="noopener noreferrer"
              target="_blank"
              className="px-4 md:mb-2"
            >
              <img src={instagram} width={39} alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/jamfortetech/"
              rel="noopener noreferrer"
              target="_blank"
              className="md:mb-2"
            >
              <img src={linkedin} width={39} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="flex justify-between flex-wrap sm:flex-col lg:flex-row h-full md:w-[50%]">
          <div className="flex flex-col sm:pt-[35px] md:pt-0 items-start">
            <h6 className="text-white font-[700] text-[0.9rem]">Company</h6>
            <ul className="pt-[15px]">
              <li className="pb-2">
                <a
                  href="/"
                  className="hover:text-[#ff9c00] text-[#D3D3D3] text-[0.7rem]"
                >
                  Home
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="/#company"
                  className="hover:text-[#ff9c00] text-[#D3D3D3] text-[0.7rem]"
                >
                  Company
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="/#about"
                  className="hover:text-[#ff9c00] text-[#D3D3D3] text-[0.7rem]"
                >
                  About
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="/#services"
                  className="hover:text-[#ff9c00] text-[#D3D3D3] text-[0.7rem]"
                >
                  Services
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="/team"
                  className="hover:text-[#ff9c00] text-[#D3D3D3] text-[0.7rem]"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:pt-[35px] md:pt-0 items-start">
            <h6 className="text-white font-[700] text-[0.9rem]">Others</h6>
            <ul className="pt-[15px]">
              <li className="pb-2">
                <a
                  href="#contactUs"
                  className="hover:text-[#ff9c00] text-[#D3D3D3] text-[0.7rem]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:pt-[35px] md:pt-0 items-start">
            <h6 className="text-white font-[700] text-[0.9rem]">
              Request Call
            </h6>
            <form className="pt-[15px] pb-2">
              <a href="tel:+234-704-550-9455">
                <Button
                  type="button"
                  className="mt-3 block bg-[#ff9c00] py-2 px-3 rounded-[7px] text-[0.7rem] text-white"
                >
                  Free Consult
                </Button>
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute right-8 bottom-10">
        <a href="#hero">
          <img src={toTop} alt="to top button" width={31} />
        </a>
      </div>
    </section>
  );
}

export default ContactUs;
