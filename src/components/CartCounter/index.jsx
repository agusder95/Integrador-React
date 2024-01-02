import React, { useState } from "react";
import { CartCounterWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { actualizeCart } from "../../redux/reducers/cartSlice";
import Modal from "../Modal";

const CartCounter = ({ actualProduct }) => {
  const dispatch = useDispatch();
  const [nro, setNro] = useState(Number(actualProduct.quantity));
  const [modal, setModal] = useState(false)

  const add = () => {
    if(actualProduct.stock > nro){
    setNro(nro + 1);
    dispatch(actualizeCart({ ...actualProduct, quantity: nro + 1 }));
    }else{
      setModal(true)
    }
  }

  const subtraction = () => {
    if (nro > 1) {
      setNro(nro - 1);
      dispatch(actualizeCart({ ...actualProduct, quantity: nro - 1 }));
    }
  }


  return (
    <CartCounterWrapper>
      <button onClick={add}>+</button>
          <p>{actualProduct.quantity}</p>
      <button onClick={subtraction}>-</button>
     {
      !modal ? null : 
        <Modal title={"Out of Stock"} text={`Sorry, this product olnly have ${actualProduct.stock} items`} btnText={"Ok"} onClick={() => setModal(false)}/>
      
     }
    </CartCounterWrapper>
  );
};

export default CartCounter;