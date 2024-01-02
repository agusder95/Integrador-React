import React from "react";
import { ButtonWrapper } from "./styles";
import PropTypes from "prop-types";
const Button = ({ text, className, onClick, type, disabled }) => {
  return (
    <ButtonWrapper
      className={` ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  text: "Button",
  onClick: () => {},
  type: "button",
};

export default Button;
