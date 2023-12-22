import styled from "styled-components";
import { CenterWrapper } from "../../components/Center/styles";
import { colors } from "../../assets/styles/colors";

export const LoginWrapper = styled.div`
  background-color: ${colors.greenBk};
`;

export const LoginContainer = styled(CenterWrapper)`
  height: 100vh;
  background-color: ${colors.greenBk};
`;

export const ButtonContainer = styled.div`
  width:100%;
  max-width:700px;
  margin:1rem auto 0;
  display: flex;
  justify-content: space-around;
  button {
    color: black;
    padding:1rem;
    background-color: transparent;
    border:none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .active {
    color: white;
    background-color: ${colors.primary};

  }
`;

export const TabContent = styled.div`
  background-color: ${colors.primary};
  padding:2rem 0;
  border-radius: 20px;
  max-width: 800px;
  margin: auto;
`;

export const TabPanel = styled.div`
  display: none;
  &.active {
    display: block;
    color: white;
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
  .checkbox {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 1rem ;
    input[type="checkbox"] {
      margin-top: 0;
      margin-right: 1rem;
      width: 1rem;
      height: 1rem;
    }
    label {
      width: 100%;
    }
  }
  p {
    color: ${colors.red};
  }
  &:last-child {
    color: white;
  }
  .btnRegLog{
    margin-top: 1rem;
    background-color: ${colors.orange};
  }
`;

export const PassContainer = styled.div`
  position: relative;
  width: 100%;
  .showPass {
    position: absolute;
    margin-top: 1rem;
    top: 10px;
    right: 13px;
    background-color: transparent;
    border: none;
  }
`;
