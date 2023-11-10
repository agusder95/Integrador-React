import React from 'react';
import { ButtonWrapper } from './styles';
import PropTypes from 'prop-types';
const Button = ({ text, className,onClick }) => {
  return (
    <ButtonWrapper className={` ${className}`} type='button' onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

Button.propTypes = {
     text:PropTypes.string,
     className:PropTypes.string,
     onClick:PropTypes.func,
}

Button.defaultProps = {
     text:'Button',
     onClick:()=>{},
}

export default Button;
