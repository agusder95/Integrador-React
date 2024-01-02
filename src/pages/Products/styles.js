import styled from 'styled-components';
import { CenterWrapper } from '../../components/Center/styles';
import { colors } from '../../assets/styles/colors';

export const ProductsWrapper = styled.div`
  background-color: ${colors.secWhite};
  `;

export const ProductsContainer = styled(CenterWrapper)`
  background-color: ${colors.mainWhite};
  min-height: 110vh;
  margin: auto;
  .center{
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MainProductContainer = styled.div`
  display: flex;
  justify-content:space-between;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;

  }
`;

export const DataProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  padding: 1rem;
  height:25rem;
  
  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width:20rem;
    
  }
  .ratingContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    p{
      margin-left:10px;
    }
  }

  button{
    width:12rem;
  }

  .btnCart{
    background-color: ${colors.orange};
    &:active{
      background-color: ${colors.darkOrange};
    }
  }

  .btnBack{
    background-color: ${colors.allWhite};
    &:active{
      background-color: ${colors.grey};
    }
  }
  
`;

export const DescriptionProductContainer = styled.div`
  padding: 1rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  h1{
    margin: 1rem 1rem;
    border-bottom: 1px solid black;
  }
  h3, p{
    margin: 0 2rem;
  }
`;