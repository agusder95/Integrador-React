import React from "react";
import PropTypes from "prop-types";
import { PriceContainer, PricingCardWrapper } from "./styles";
import Button from "../Button";

const PricingCard = ({ className, title, price, children }) => {
  const handleButtonClick = () => {
    window.location.href = "/Dummy"
  }

  return (
    <PricingCardWrapper className={` ${className}`}>
      <h3>{title}</h3>
      <PriceContainer>
        <h1>{price}</h1>
        <p>/mounth</p>
      </PriceContainer>
      <ul>{children}</ul>
      <Button className={"btn"} text={"Choose Plan"} onClick={handleButtonClick }/>
    </PricingCardWrapper>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
};

export default PricingCard;
