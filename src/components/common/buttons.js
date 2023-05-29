import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Button = ({
  withIcon,
  RightIcon,
  icon,
  text,
  onClick,
  isBlue,
  isGreen,
  isRed,
  isYellow,
  isWhite,
  className,
  loading,
  type,
  disabled,
  variants,
}) => {
  return (
    <button
      className={`${className} w-full rounded-[8px] flex text-center justify-center items-center focus:outline-none   
      ${
        isBlue
          ? "hover:bg-opacity-80 text-white disabled:bg-opacity-50 focus:bg-opacity-80 bg-[#1C9FDA] "
          : isWhite
          ? "bg-white-100 text-[#1C9FDA] hover:bg-opacity-60  focus:bg-opacity-80 border-[2px] border-[#1C9FDA] rounded-[8px]"
          : "bg-white-100 text-blue-100 hover:bg-blue-50  focus:bg-opacity-80 "
      } `}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {withIcon && <span className="mr_10">{icon}</span>}
      {loading ? (
        <span className="">
          <BiLoaderCircle size={32} className="mx-auto animate-spin-slow" />
        </span>
      ) : !loading ? (
        <div className="ml_10">{text}</div>
      ) : null}
      {RightIcon && <span className="ml-[10px]">{icon}</span>}
    </button>
  );
};

export { Button };
