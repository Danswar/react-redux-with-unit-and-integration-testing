import React from "react";
import PropTypes from "prop-types";

const SharedButton = ({ buttonText, emitEvent }) => {
  const submitEvent = () => {
    if (emitEvent) {
      emitEvent();
    }
  };

  return (
    <button onClick={submitEvent} data-test="shareButtonComponent">
      {buttonText}
    </button>
  );
};

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
