import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { CenterWrapper } from "../../components/Center/styles";

export const DummyWrapper = styled.div``;

export const CenterDummy = styled(CenterWrapper)`
  background-color: ${colors.green};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Testing */
`;

export const ImgDummyContainer = styled.div`
  min-width:320px;
`;