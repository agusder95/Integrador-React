import styled from "styled-components";
import { ImageWrapper } from "../Image/styles";
import { colors } from "../../assets/styles/colors";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  
  background-color: ${colors.primary};
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.5s ease;
  @media screen and (min-width: 320px) {
    height: ${(props) => (props.$shrink ? 80 : 150)}px;
  }

  @media screen and (min-width: 768px) {
    height: ${(props) => (props.$shrink ? 100 : 150)}px;
  }

  @media screen and (min-width: 1024px) {
    height: ${(props) => (props.$shrink ? 100 : 180)}px;
  }
`;

export const HeaderCategoriesContainer = styled.div`

  display:flex;
  align-items:flex-end;
  ul{
    display: flex;
    justify-content:flex-start;
    align-items:center;
    color: ${colors.mainWhite};
    overflow-y: hidden;
    li{
      margin-right:15px;
      padding:.5rem 0 1rem;
      flex: 0 0 auto;
      &:first-child{
        margin-left: 10px;
      }
    }
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  @media screen and (min-width: 320px) {
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    height: 100px;
  }

  @media screen and (min-width: 1024px) {
    height: 90px;
  }
`;

export const Image = styled(ImageWrapper)``;
export const GeneralContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 10rem;

  @media screen and (min-width: 320px) {
    flex-grow: 1;
    .icons-header {
      color: ${colors.mainWhite};
      font-size: 1rem;
      vertical-align: middle;
    }
  }

  @media screen and (min-width: 768px) {
    margin-right: 2rem;
    .icons-header {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .icons-header {
      font-size: 2rem;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  @media screen and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
    a {
      margin-top: 5px;
      color: ${colors.mainWhite};
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    a {
      margin-right: 5px;
    }
  }
`;

export const CartContainer = styled.div`
  position: relative;
  a {
    position: absolute;
    top: -13px;
    color: ${colors.red};
  }
`;
