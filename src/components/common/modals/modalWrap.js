import React from "react";

import PropTypes from "prop-types";

const ModalBody = ({ children, onClose }) => {
  return (
    <div className="fixed w-[100%] h-[100%] top-0 left-0 z-[4000] grid place-content-center bg-black bg-opacity-50 ">
      <div
        onClick={onClose}
        className="overlay w-screen h-screen inset-0 fixed bg-black-200 bg-opacity-60"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/4  box-border w-[900px] xs:max-w-[calc(100%_-_80px)] max-w-[calc(100%_-_50px)] z-[400]] ">
        {children}
      </div>
    </div>
  );
};

ModalBody.propTypes = {
  onClose: PropTypes.func,
};

export default ModalBody;
