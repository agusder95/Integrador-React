import React, { useState } from "react";
import { CounterContaienr, CounterWrapper } from "./styles";

const Counter = ({stock}) => {
  const [quantity, setQuantity] = useState(1);

  

  const handleQuantity = (e) => {
     if(e.target.value <= stock){
          setQuantity(e.target.value);
     }
  };
  return (
    <CounterWrapper>
      <div className="counter">
        <button
          className="btnAdd"
          onClick={() =>
            setQuantity(quantity < stock ? quantity + 1 : quantity)
          }
        >
          +
        </button>
        <CounterContaienr
          type="number"
          value={quantity}
          onChange={handleQuantity}
        />
        <button
          className="btnRemove"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
        >
          -
        </button>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
