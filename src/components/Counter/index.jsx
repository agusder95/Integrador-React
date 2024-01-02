import React, { useEffect, useState } from "react";
import { CounterContaienr, CounterWrapper, InputContainer } from "./styles";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const Counter = ({ stock, price }) => {

  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(price * quantity);
  const handleQuantity = (e) => {
    if (e.target.value <= stock) {
      e.target.value = e.target.value.replace(/^0+/, '')
      setQuantity(Number(e.target.value));
      setSubtotal(e.target.value * price);
    }
  };

  const add = () => {
    if (quantity <= stock) {
      setQuantity(quantity + 1);
      setSubtotal((quantity + 1) * price);
    } else {
      setQuantity(quantity);
    }
  };

  const remove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setSubtotal((quantity - 1) * price);
    } else {
      setQuantity(quantity);
    }
  };

  

  return (
    <CounterWrapper>
      <CounterContaienr>
        <div className="counter">
          <button className="btnAdd" onClick={add}>
            +
          </button>
          <InputContainer
            type="number"
            value={quantity}
            onChange={handleQuantity}
          />
          <button className="btnRemove" onClick={remove}>
            -
          </button>
        </div>
      </CounterContaienr>
      <p>Stock: {stock}</p>
      <p>Subtotal: ${subtotal}</p>
    </CounterWrapper>
  );
};

Counter.propTypes = {
  price: PropTypes.number,
  stock: PropTypes.number,
};


export default Counter;
