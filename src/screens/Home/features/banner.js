import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useRecipeStore from "store/recipes";
import { ReactComponent as Left } from "assets/icons/left.svg";
import { ReactComponent as Right } from "assets/icons/right.svg";
import BannerCard from "components/common/cards/bannerCard";

const Banner = () => {
  const { popular_recipes, fetchPopularRecipes } = useRecipeStore();

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    dotsClass: "custom-dots slick-dots ",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 7000,
  };

  useEffect(() => {
    fetchPopularRecipes(5);
  }, []);

  return (
    <div className="w-full relative">
      <Slider ref={sliderRef} {...settings}>
        {popular_recipes?.map((item, index) => {
          return (
            <div className="flex px-[5px]" key={index}>
              <BannerCard
                image={item?.image}
                title={item?.name}
                author={item?.author}
              />
            </div>
          );
        })}
      </Slider>

      <div className="absolute sm:block hidden w-full bottom-[35px] left-1/2 -translate-x-1/2 z-30 ">
        <div className="flex gap-x-4 mx-auto justify-center">
          <span
            onClick={() => {
              previous();
            }}
          >
            <Left />
          </span>{" "}
          <span
            onClick={() => {
              next();
            }}
          >
            <Right />
          </span>
        </div>{" "}
      </div>
    </div>
  );
};

export default Banner;
