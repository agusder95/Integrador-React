import styled from "styled-components";

export const HamburgerMenuWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ToggleButon = styled.button`
  z-index: 1;
  background-color: transparent;
  border:none;
`;

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  margin: 6px 0;
  background-color: white;
  transition: 0.4s;
  &:nth-child(1) {
    transform: ${(props) =>
      props.$menuopen ? "rotate(45deg) translate(7px, 7px);" : "none"};
  }
  &:nth-child(2) {
    opacity: ${(props) => (props.$menuopen ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${(props) =>
      props.$menuopen ? " rotate(-45deg) translate(6px, -7px);" : "none"};
  }
`;

export const MenuContent = styled.div`
  box-shadow: 10px 11px 46px -9px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: 10px 11px 46px -9px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 10px 11px 46px -9px rgba(0, 0, 0, 0.76);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  z-index: 0;
  transition: left 0.3s ease-in-out;
  top: 0;
  left: ${(props) => (props.$menuopen ? -1 : -20)}rem;
  /* padding: 0 4rem 0; */
  position: absolute;
  background-color: springgreen;
  width: 15rem;
`;
