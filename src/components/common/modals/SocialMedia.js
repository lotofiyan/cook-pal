import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

import PropTypes from "prop-types";

const SocialMedia = ({ onClose, details, mealName, author }) => {
  const shareTitle = "Cookpal Recipe\n\n";
  const urlDescription = `${mealName} \n by ${author} \n Let's make amazing meals together!\nYour cooking pal.\n`;
  const codeDescription = `${mealName} \n by ${author} \n Let's make amazing meals together!\nYour cooking pal.\n`;
  return (
    <div className="absolute rounded-[8px] w-[100%] h-[100%] top-0 left-0 z-[1000] grid place-content-center">
      <div onClick={onClose} />
      <div className="bg-[#fff] relative pt-[20px] p-[40px]">
        <div
          onClick={onClose}
          className="cursor-pointer flex justify-end items-end "
        >
          <AiOutlineClose />
        </div>
        <div className="font-bold text-[#093549] text-[18px]">
          Social Media Share
        </div>
        <div className="mt-[20px] flex items-center gap-[20px]">
          <WhatsappShareButton
            url={details?.url ? details?.url : details?.code}
            title={shareTitle}
            separator={details?.url ? urlDescription : codeDescription}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <FacebookShareButton
            url={details?.url ? details?.url : details?.code}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={details?.url ? details?.url : details?.code}
            title={shareTitle}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={details?.url ? details?.url : details?.code}
            title={shareTitle}
            summary={urlDescription}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <TelegramShareButton
            url={details?.url ? details?.url : details?.code}
            title={shareTitle}
          >
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
        </div>
      </div>{" "}
    </div>
  );
};

SocialMedia.propTypes = {
  onClose: PropTypes.func,
  details: PropTypes.any,
  mealName: PropTypes.string,
  author: PropTypes.string,
};

export default SocialMedia;
