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
     z-index: 100;
`;

export const ModalBox = styled.div`
     background-color: ${colors.allWhite  };
     width:23rem;
     height:20rem;
     padding: 0 1rem;
     text-align: center;
     border-radius: 15px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-evenly;

     .btnModal{
        background-color: ${colors.heroBg};
        border:none;
        border-radius: 10px;
        &:active{
            background-color: ${colors.darkHeroBg};
        }
     }
`;

