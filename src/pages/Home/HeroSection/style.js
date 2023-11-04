import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const HeroWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => colors.heroBg};
     min-height:28rem;

  @media only screen and (min-width: 320px) {
    flex-direction: column;
    justify-content:center;
    .txtBlock {
      width: 100%;
      margin:2rem 0;
      h1{
           text-align:center;
          margin-bottom:2rem;
          font-size:1.5rem;
      }
      p{
          margin-bottom:1rem;
      }
      a{
          color:${colors.red};
      }
    }
    .imgBlock {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
     flex-direction: row;
     padding:0 .5rem;
    .txtBlock {
      width: 55vw;
    }
    .imgBlock {
      width: 45vw;
    }
  }
`;

export const ImgHeroConrainer = styled.div`
  width: 100%;
`;
