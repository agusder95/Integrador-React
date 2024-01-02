import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { CenterWrapper } from "../../components/Center/styles";

export const ForgotPassWrapper = styled.div`
  background-color: ${colors.greenBk};
`;

export const ForgotPassContainer = styled(CenterWrapper)`
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.greenBk};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FomrConatainer = styled.div`
  background-color: ${colors.primary};
  padding: 2rem 0;
  border-radius: 20px;
  max-width: 800px;
  margin: 5rem auto;
  width: 100%;
  h1{
     text-align: center;
     color: ${colors.mainWhite};
     margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 80%;
  max-width: 700px;
  
  input {
    margin-top: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.black};
    border-radius: 20px;
    width: 100%;
  }
  p {
    color: ${colors.red};
  }

  .btnChangue{
    margin-top: 2rem;
    background-color: ${colors.orange};
  }
`;

export const PassContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  .showPass {
    position: absolute;
    margin-top: 1rem;
    top: 10px;
    right: 13px;
    background-color: transparent;
    border: none;
  }
`;
