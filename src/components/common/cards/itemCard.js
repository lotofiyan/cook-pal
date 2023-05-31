import React from "react";
import LazyImage from "../image";
import PropTypes from "prop-types";
import { ReactComponent as Star } from "assets/icons/yellowStar.svg";
import { ReactComponent as Like } from "assets/icons/like.svg";
import { ReactComponent as Comment } from "assets/icons/comment.svg";
import { Link } from "react-router-dom";

const Card = ({ image, diet, title, prepTime, className, id }) => {
  return (
    <Link to={`/meal-details/${id}`}>
      <div className="w-[305px] rounded-[16px] shadow-custom h-[320px] flex flex-col ">
        <div className="rounded-[16px] p-2 h-[208px] overflow-hidden">
          <LazyImage
            src={image}
            placeholder={"Loading..."}
            className={`!rounded-[16px] !h-full   ${className}`}
          />
        </div>

        <div className="flex flex-col px-4 justify-between items-between">
          <p className="font-inter font-medium text-[10px] text-[#A1A1A1]">
            {diet}
          </p>
          <div className="flex justify-between items-center">
            <p className="font-inter font-bold text-[18px] text-black">
              {title}
            </p>
            <p className="flex gap- 1">
              <Star />{" "}
              <span className="text-[#ADADAD] font-inter text-[12px]">
                {Math.round((Math.random() * 2 + 3) * 10) / 10}
              </span>
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-inter font-semibold text-[18px] text-[#DC582A]">
              {prepTime} mins
            </p>
            <p className="flex items-center gap-x-2">
              <Like />
              <Comment />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  diet: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  prepTime: PropTypes.number,
  id: PropTypes.number,
};

export default Card;
