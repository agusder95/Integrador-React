import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { CenterWrapper } from "../../components/Center/styles";

export const DummyWrapper = styled.div``;

export const CenterDummy = styled(CenterWrapper)`
  background-color: ${colors.red};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh; /* Testing */
`;
