import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const PricingCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 18rem;
  height: 27rem;
  padding: 1rem;
  margin: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.55);

  .btn {
    position: absolute;
    bottom: 20px;
    background-color: ${colors.orange};
  } 
`;

export const PriceContainer = styled.div`
  padding: 1rem;
  h1 {
    font-size: 2.5rem;
    padding: 0;
  }
  p{
    color: ${colors.grey};
    font-size: .7rem;
  }
`;
