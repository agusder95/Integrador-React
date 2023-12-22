import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { CenterWrapper } from "../../components/Center/styles";

export const ContactWrapper = styled.div`
  background-color: ${colors.violet};
`;

export const ContactContainer = styled(CenterWrapper)`
    background-color: ${colors.violet};
    min-height: 100vh;
    max-width: 1500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    
  @media screen and (min-width: 320px) {
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

export const ImgContactContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width:40%;
    display:block;
  }
`;