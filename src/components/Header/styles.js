import styled from "styled-components";
import { ImageWrapper } from "../Image/styles";

export const HeaderWrapper = styled.header`
  background-color: red;
  width: 100%;
  height: ${props=> props.$shrink ? 100 : 200}px;

  position: fixed;
  z-index: 99;
  top: 0;
  transition: height 0.5s ease;
`;

export const Image = styled(ImageWrapper)`
  width:50%;
`;