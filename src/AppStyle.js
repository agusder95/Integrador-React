import styled from 'styled-components';
import { colors } from './assets/styles/colors';

export const AppWrapper = styled.div`
  max-width:1500px;
  margin: 0 auto;
  background-color: ${colors.mainWhite};

  @media screen and (min-width: 320px) {
     margin-top:150px;
  }

  @media screen and (min-width: 768px) {
     margin-top:150px;
  }

  @media screen and (min-width: 1024px) {
     margin-top:200px;
  }

`;