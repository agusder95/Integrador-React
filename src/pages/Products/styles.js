import styled from 'styled-components';
import { CenterWrapper } from '../../components/Center/styles';
import { colors } from '../../assets/styles/colors';

export const ProductsWrapper = styled.div`
  background-color: ${colors.secWhite};
  `;

export const ProductsContainer = styled(CenterWrapper)`
  background-color: ${colors.secWhite};
  min-height: 200vh;
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

/* export const ThumbnailContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

export const ProductIMGContainer = styled.div`
  
`;

export const MainImgProductContainer = styled.div`
  
`; */

export const DataProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:20rem;
  padding: 1rem;
`;

export const DescriptionProductContainer = styled.div`
  
`;