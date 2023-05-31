import { BiLoaderCircle } from "react-icons/bi";

import PropTypes from "prop-types";

const ComponentLoader = ({ className, size, text }) => (
  <div className="flex flex-col justify-center w-full h-full">
    <BiLoaderCircle
      size={size ? size : 32}
      className={`${className} mx-auto animate-spin-slow text-green`}
    />
    <p className="text-white text-lg font-medium mx-auto text-center">{text}</p>
  </div>
);

ComponentLoader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  text: PropTypes.string,
};

export default ComponentLoader;
