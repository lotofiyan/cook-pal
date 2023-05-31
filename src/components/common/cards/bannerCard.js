import LazyImage from "components/common/image";
import React from "react";
import PropTypes from "prop-types";

const BannerCard = ({ image, title, author, className }) => {
  return (
    <div className="relative w-full max-h-[360px] md:rounded-[30px] rounded-[12px] overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full lg:pl-[80px] md:pl-[60px] pl-[10px]">
        <div className="flex flex-col lg:w-[50%] md:w-[70%] w-[90%]">
          <p className="font-poppins md:text-[24px] text-[20px] text-[#DC582A] font-medium">
            Trending now
          </p>
          <p className="text-white font-poppins md:text-[40px] text-[24px] font-bold">
            {title}
          </p>
          <p className="text-white font-poppins font-medium md:text-[20px] text-base">
            By {author}
          </p>
        </div>
      </div>

      <div className="h-full w-full banner_gradient z-10 absolute"></div>
      <div className="max-h-[360px] md:rounded-[30px] rounded-[12px] overflow-hidden">
        <LazyImage
          src={image}
          placeholder={"Loading..."}
          className={className}
        />
      </div>
    </div>
  );
};
BannerCard.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
  className: PropTypes.string,
};

export default React.memo(BannerCard);
