import React from "react";
import { ReactComponent as Icon } from "assets/icons/logo.svg";
import { ReactComponent as FB } from "assets/icons/facebook.svg";
import { ReactComponent as TW } from "assets/icons/twitter.svg";
import { ReactComponent as IG } from "assets/icons/instagram.svg";
import { ReactComponent as LI } from "assets/icons/linkedin.svg";
import { Input } from "components/common/input";
import { Button } from "components/common/buttons";

const Footer = () => {
  const Company = ["Home", "Explore", "Team", "About us", "Activity"];
  const Resources = ["Blog", "Use Cases", "Testimonials", "Insights"];
  return (
    <div className="z-20 flex flex-col gap-y-16 md:py-8 py-4 font-poppins">
      <div className="flex justify-between gap-x-6 gap-y-4 flex-wrap">
        <div className="flex flex-col gap-y-4 lg:max-w-[25%] w-full">
          <Icon />
          <p className="text-black font-poppins md:text-base text-[14px]">
            Cookpal is a recipe website with a wide variety of delicious
            recipes, easy-to-use search function. Join our community and let's
            cook together!
          </p>
        </div>

        <div className="flex flex-col md:gap-y-6 gap-y-2">
          <p className="font-semibold font-poppins text-xl text-black">
            Company
          </p>
          {Company.map((item, index) => {
            return (
              <p
                key={item + index}
                className="text-[#000000] opacity-60 font-medium"
              >
                {item}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col md:gap-y-6 gap-y-2">
          <p className="font-semibold font-poppins text-xl text-black">
            Resources
          </p>
          {Resources.map((item, index) => {
            return (
              <p
                key={item + index}
                className="text-[#000000] opacity-60 font-medium"
              >
                {item}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col gap-y-6">
          <Icon />
          <p className="text-[#000000] opacity-60 font-light text-[14px]">
            Join our email listing today!
          </p>
          <div className="flex gap-x-2 items-center">
            <Input
              placeholder={"Your Email"}
              subText={"@"}
              subTextClass={"!text-black"}
              className={"!w-full !px-1"}
            />
            <Button
              text={"Subscribe"}
              className={"!h-full !w-fit !px-3"}
              isGreen
            />
          </div>
        </div>
      </div>
      <div className="flex gap-x-[30px] mx-auto">
        <span>
          <IG />
        </span>
        <span>
          <TW />
        </span>
        <span>
          <LI />
        </span>
        <span>
          <FB />
        </span>
      </div>
    </div>
  );
};

export default Footer;
