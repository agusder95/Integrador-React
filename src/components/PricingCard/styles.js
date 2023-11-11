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
  border: 1px solid black;
  border-radius: 20px;

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
