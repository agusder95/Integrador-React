import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
export const FooterWrapper = styled.footer`
  min-height: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.primary};
  color: ${colors.mainWhite};
`;

export const InfoContainer = styled.ul`
  width:280px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  li{
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    .iconFooter{
      margin-right:1rem;
    }
  .titleFooter{
    text-align: center;
  }
    p{
      font-size:small;
    }
    a{
      font-size:small;
    }

  }
`;