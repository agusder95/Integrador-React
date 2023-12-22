import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const ModalWrapper = styled.div`
     width: 100%;
     height: 100%;
     background-color: rgba(0,0,0,0.4);
     position:fixed;
     top:0;
     left:0;
     display:flex;
     justify-content: center;
     align-items:center;
`;

export const ModalBox = styled.div`
  background-color: ${colors.mainWhite};
     
     width:23rem;
     height:20rem;
     /* top: calc((100vh - 20rem)/2);
     left: calc((100vw - 23rem)/2); */
     border-radius: 15px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-evenly;
`;