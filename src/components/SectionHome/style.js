import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  min-height: 28rem;

  @media only screen and (min-width: 320px) {
    flex-direction: column;
    justify-content: center;
    .txtBlock {
      width: 100%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      h1 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.5rem;
      }
      p {
        margin-bottom: 1rem;
      }
      a {
        color: ${colors.red};
      }
    }
    .imgBlock {
      width: 100%;
      max-width: 24rem;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    .txtBlock {
      width: 55vw;
      padding: 0 1rem;
    }
    .imgBlock {
      max-width: 45vw;
    }
  }
`;
export const ImgSectionConrainer = styled.div`
  width: 100%;
`;
