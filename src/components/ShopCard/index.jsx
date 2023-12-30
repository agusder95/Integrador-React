import React from "react";
import {
  ShopCardImgContainer,
  ShopCardWrapper,
  ShopInfoContainer,
} from "./styles";
import Image from "../Image";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopCard = ({ Img, title, price, keyId, stock }) => {
  const loginUser = useSelector((state) => state.userInfo.login);

  const navigate = useNavigate();

  const submitCart = () => {
    if (loginUser) {
      navigate(`/Shop/${title}/Id=${keyId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <ShopCardWrapper>
      <ShopCardImgContainer>
        <Image src={Img} alt={Img} />
      </ShopCardImgContainer>
      <ShopInfoContainer>
        <p>{title.slice(0, 15) + (title.length > 15 ? "..." : "")}</p>
        <h2>${price}</h2>
      </ShopInfoContainer>
      {stock > 0 ? (
        <Button className={"shopBtn"} text={"Shop Now"} onClick={submitCart} />
      ) : (
        <Button className={"diseabledBtn"} diseabled text={"Out of Stock"} />
      )}
    </ShopCardWrapper>
  );
};

export default ShopCard;
