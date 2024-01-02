import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const ContactFormWrapper = styled.div`
  padding: 2rem 0;
  width: 50%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) {
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
  h1 {
    align-self: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  input {
    margin-top: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.black};
    border-radius: 20px;
    width: 100%;
   
  }
  textarea {
    margin-top: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.black};
    border-radius: 20px;
    height: 12rem;
    width: 100%;
  }
  .contactFormBtn {
    background-color: ${colors.orange};
    width: 90%;
    border-radius: 20px;
    margin-top:1rem;
  }
`;

export const ErrorInput = styled.p`
  text-align: center;
  color: red;
  margin: 0;
`;
