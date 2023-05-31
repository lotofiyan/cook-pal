import React from "react";
import { ReactComponent as Icon } from "assets/icons/logo.svg";
import { Button } from "components/common/buttons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  const dashboardLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Explore",
      link: "/explore",
    },
    {
      title: "Help",
      link: "/help",
    },
  ];
  return (
    <div className="z-20">
      {" "}
      {/* <Register
        showModal={showModal}
        handleBackdropClose={() => {
          setshowModal(false);
        }}
      /> */}
      <header className="md:h-[100px] h-[64px] flex items-center justify-between w-full  ">
        <Link to="/">
          <div className="flex gap-x-[2px] ">
            <Icon />
          </div>
        </Link>

        <div className="flex gap-x-5">
          {dashboardLinks.map(({ title, link, url }) => (
            <Link to={link} key={title}>
              <div
                className={`text-black font-poppins font-medium ${
                  location?.pathname === link && "!text-green"
                }`}
              >
                {title}
              </div>
            </Link>
          ))}
        </div>

        <div className="">
          <Button
            isGreen
            text={"Sign Up"}
            className="font-poppins font-medium rounded-[8px] px-6 py-4 md:block hidden"
            onClick={() => {}}
          />
          {/* {toggleBtn && (
            <div
              onClick={() => {
                setToggleBtn(false);
              }}
              className={` md:hidden block`}
            >
              <IoCloseOutline size={24} color="#667085" />
            </div>
          )}
          {!toggleBtn && (
            <div
              onClick={() => {
                setToggleBtn(!toggleBtn);
              }}
              className={` md:hidden block`}
            >
              <RxHamburgerMenu size={18} color="#667085" />
            </div>
          )} */}
        </div>
      </header>
    </div>
  );
};

export default Header;
