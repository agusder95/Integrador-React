import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const ContactFormWrapper = styled.form`
  
  padding: 2rem 0;

     display: flex;
     flex-direction: column;
     @media screen and (min-width: 320px){
          align-items: center;
     }
     @media screen and (min-width: 768px){
          
          align-items: flex-start;
     }
     h1{
          align-self: center;
     }
     input{
          margin: 1rem 0;
          padding: .5rem;
          border:1px solid ${colors.black};
          border-radius:20px;
          width:90%;
     }
     textarea{
          margin: 1rem 0;
          padding: .5rem;
          border:1px solid ${colors.black};
          border-radius:20px;
          height:12rem;
          width:90%;
          
     }

     .contactFormBtn{
          background-color: ${colors.orange};
          width:90%;
          border-radius:20px;
     }

`;