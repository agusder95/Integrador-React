import styled from "styled-components";
import { CenterWrapper } from "../../components/Center/styles";
import { colors } from "../../assets/styles/colors";
import { keyframes } from "styled-components";

export const ShopWrapper = styled.div``;

export const CenterShop = styled(CenterWrapper)`
  min-height: 100vh;
  background-color: ${colors.mainWhite};
  display: flex;
  flex-direction: column;
  align-items: center;

  .moreBtn {
    padding: 0;
    width: 37px;
    height: 37px;
    background-color: transparent;
    border: none;
    .iconMore{
      width: 37px;
      height: 37px;
      color:black;
    }
    .noActive{
      color: ${colors.grey};
    }
    
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export const TopContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin-top: -1rem;
  background-color: ${colors.secondary};
  color: ${colors.mainWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 1;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 5px 10px;
      flex: 0 0 auto;
    }
  }
  .active {
    background-color: ${colors.orange};
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;

  .search {
    margin: 1rem 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  max-width: 80%;
  input {
    width: 100%;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
  }
  .reset {
    position: absolute;
    right: 10px;
    background-color: transparent;
    border: none;
    font-weight: bold;
  }
`;

export const SelectCategory = styled.select`
  border-radius: 10px;
`;

export const OptionsCategory = styled.option`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin: 0.1rem 0.5rem;
`;
