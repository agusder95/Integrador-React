import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const UserMenuWrapper = styled.div`
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMenuContainer = styled.div`
  min-width: 320px;
  width: 25%;
  max-height: 40rem;
  background-color: ${colors.secondary};
  border-radius: 10px;
  position: absolute;
  top: 6rem;
  right: 0px;
  z-index: 2;
  color: ${colors.mainWhite};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  overflow-y: scroll;
  @media screen and (min-width: 320px) {
    width:320px;
  }
  @media screen and (min-width: 768px) {
    width:25rem;
  }

  .closeBtn {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 0 0.5rem;
    background-color: ${colors.secWhite};
    border: none;
    font-size: 1rem;
    border-radius:50px;
  }
`;

export const LoginUserContaienr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  .btnLogin {
    margin-top: 2rem;
  }
`;

export const UserDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .deleteAccount {
    display: flex;

    .btnAcnt{
      margin-left: 1rem;
      padding: 0.5rem 0;
      width:5rem;
    }
  }
`;

export const NameLogin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin:1rem 0;
  height:${props=>props.$empty ? "400px" : ""};
  width: 100%;
  .deleteAll{
    width:100%;
    padding: 0;
    margin:.5rem 0;
    background-color:${colors.red};
    color: ${colors.mainWhite};
  }
  .btnBuy{
    width:100%;
    background-color:${colors.green};
    color: ${colors.mainWhite};
  }
`;

export const ListProduct = styled.li`
  color: black;
  width: 100%;
  /* height: 4rem; */
  border-radius: 5px;
  background-color: ${colors.mainWhite};
  margin-bottom: 0.5rem;
`;

export const ProductListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .productInfo{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .NamePrice{
      margin-left: 1rem;
      width: 50%;
      .price{
        display: flex;
        justify-content: space-between;
      }
    }
    
    
  }
  .btnRmb{
    padding: 0 .3rem;
    margin:0;
    position: absolute;
    right: 20px;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }

  .ProductImgContainer{
    height:4rem;
    width: 4rem;
    img{
      border-top-left-radius:5px;
      border-bottom-left-radius:5px;
    }
  }

`;
