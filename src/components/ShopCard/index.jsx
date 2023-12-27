import React from "react";
import {
  ShopCardImgContainer,
  ShopCardWrapper,
  ShopInfoContainer,
} from "./styles";
import Image from "../Image";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/reducers/cartSlice";
import { setLogin } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";


const ShopCard = ({ Img, title, price, keyId, stock }) => {
  const loginUser = useSelector((state) => state.userInfo.login)
  const cartDispatch = useDispatch()
  const navigate = useNavigate()

  const submitCart = () => {
    if(loginUser){
      const newProduct = {
        id: keyId,
        title: title,
        price: price,
        stock: stock
      }
      cartDispatch(addCart(newProduct))
    }else{
      navigate('/login')
    }

  }

  return (
    <ShopCardWrapper >
      <ShopCardImgContainer>
        <Image src={Img} alt={Img} />
      </ShopCardImgContainer>
      <ShopInfoContainer>
        <p>{title.slice(0, 15)+ (title.length > 15 ? "..." : "")}</p>
        <h2>${price}</h2>
      </ShopInfoContainer>
      {
        stock > 0 ?  <Button className={"shopBtn"} text={"Shop Now"} onClick={submitCart} /> : 
        <Button className={"diseabledBtn"}  diseabled text={"Out of Stock"} />
      }
      
    </ShopCardWrapper>
  );
};

export default ShopCard;
