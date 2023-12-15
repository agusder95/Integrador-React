import styled from "styled-components";
import { ImageWrapper } from "../Image/styles";
import { colors } from "../../assets/styles/colors";
import HamburgerMenu from "../HambMenu";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;

  background-color: ${colors.primary};
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  transition: height 0.5s ease;
  @media screen and (min-width: 320px) {
    height: ${(props) => (props.$shrink ? 7 : 10)}rem;
  }

  @media screen and (min-width: 768px) {
    height: ${(props) => (props.$shrink ? 7 : 10)}rem;
  }

  @media screen and (min-width: 1024px) {
    height: ${(props) => (props.$shrink ? 8 : 12)}rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.5s ease;
  padding-top: 1rem;
`;

export const HMHeader = styled(HamburgerMenu)`
  @media screen and (min-width: 320px) {
    .colorBar{
      height:3rem;
      width: 100%;
      background-color: ${colors.grey};
      border-top-right-radius:10px;
      border-top-left-radius:10px;
    }
    .dataContent {
      background-color: ${colors.mainWhite};
    }
    ul {
      padding-top:20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      li {
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 768px){
    display: none;
  }
`;

export const HeaderCategoriesContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 320px) {
    justify-content: flex-start;
    margin-left:1rem;
    .menu2 {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-end;

    .menu2 {
      display: flex;
      width: 100%;
      ul {
        display: flex;
        justify-content: space-evenly;
        flex-grow: 1;
        align-items: center;
        color: ${colors.mainWhite};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .menu2 {
      max-width: 950px;
    }
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  transition: height 0.5s ease;
  @media screen and (min-width: 320px) {
    height: ${(props) => (props.$shrink ? 2 : 3)}rem;
  }

  @media screen and (min-width: 768px) {
    height: ${(props) => (props.$shrink ? 2.5 : 4)}rem;
  }

  @media screen and (min-width: 1024px) {
    height: ${(props) => (props.$shrink ? 2.5 : 5)}rem;
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
