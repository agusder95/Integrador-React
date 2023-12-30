import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const ProductImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35rem;
  justify-content: flex-end;
  /* height: 100%; */
  @media screen and (min-width: 320px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ThumbnailContainer = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 20%;

    /* margin: 0 auto 0; */
  }
`;

export const Thumbnail = styled.li`
  /* margin: 1rem; */
`;

export const ImageThumbnailContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.$active ? colors.grey : "transparent")};
  box-shadow: ${(props) => (
    !props.$active ? "none" : "0px 0px 28px 0px rgba(0, 0, 0, 0.25)"
    
  )};
`;

export const ImagePpal = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 100%;
    /* max-height:35rem; */
  }
`;

export const ImagePpalContainer = styled.div`
  /* max-height: 30rem;
  margin:  auto; */

  box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 320px) {
    width: 320px;
    height: 340px;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    height: 100%;
  }
`;
