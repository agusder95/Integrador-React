import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { CenterWrapper } from "../../components/Center/styles";

export const ContactWrapper = styled.div`
  background-color: ${colors.violet};
`;

export const ContactContainer = styled(CenterWrapper)`
  background-color: ${colors.violet};
  min-height: 100vh;
  max-width: 1500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
