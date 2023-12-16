import React from "react";
import {
  ShopCardImgContainer,
  ShopCardWrapper,
  ShopInfoContainer,
} from "./styles";
import Image from "../Image";
import Button from "../Button";

const ShopCard = ({ Img, title, price, keys }) => {
  return (
    <ShopCardWrapper key={keys}>
      <ShopCardImgContainer>
        <Image src={Img} alt={Img} />
      </ShopCardImgContainer>
      <ShopInfoContainer>
        <p>{title}</p>
        <h2>${price}</h2>
      </ShopInfoContainer>
      <Button className={"shopBtn"} text={"Shop Now"} />
    </ShopCardWrapper>
  );
};

export default ShopCard;
