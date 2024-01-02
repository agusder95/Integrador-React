import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const CenterWrapper = styled.div`
  max-width: 1500px;
  margin: auto;
  background-color: ${colors.secondary};
  

  @media screen and (min-width: 320px) {
    padding-top: 11rem;
  }

  @media screen and (min-width: 768px) {
    padding-top: 11rem;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 13rem;
  }
`;
