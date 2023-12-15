import React from "react";
import { ShopCardImgContainer, ShopCardWrapper } from "./styles";
import Image from "../Image";
import Button from "../Button";

const ShopCard = ({ Img, title, price, keys }) => {
  return (
    <ShopCardWrapper key={keys}>
      <ShopCardImgContainer>
        <Image src={Img} alt={Img} />
      </ShopCardImgContainer>
      <h2>{title}</h2>
      <p>{price}</p>
      <Button className={"shopBtn"} text={"Shop Now"} />
    </ShopCardWrapper>
  );
};

export default ShopCard;
