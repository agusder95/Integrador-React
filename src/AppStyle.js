import styled from 'styled-components';
import { colors } from './assets/styles/colors';

export const AppWrapper = styled.div`
  max-width:1500px;
  margin:auto;
  background-color: ${colors.secondary};

  @media screen and (min-width: 320px) {
     padding-top:10rem;
  }

  @media screen and (min-width: 768px) {
   padding-top:10rem;
  }

  @media screen and (min-width: 1024px) {
   padding-top:12rem;
  }

`;