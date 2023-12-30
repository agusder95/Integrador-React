import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const UserMenuWrapper = styled.div`
  width: 320px;
  min-height: 500px;
  background-color: ${colors.secondary};
  border-radius: 10px;
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 2;
  color: ${colors.mainWhite};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 0.5rem;
  }

  .deleteAccount{
     display: flex;
  

  }
`;
