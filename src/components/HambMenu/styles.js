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
`;

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  margin: 3px 0;
  background-color: #333;
  transition: 0.4s;
  &:nth-child(1){
    transform:${props=>props.$menuopen ? 'rotate(-40deg) translate(-3px, 4px)' : 'none'};
  }
  &:nth-child(2){
    opacity:${props=>props.$menuopen ? '0' : '1'};
  }
  &:nth-child(3){
    transform:${props=>props.$menuopen ? 'rotate(40deg) translate(-5px, -5px)' : 'none'};
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  transition: left 0.3s ease-in-out;
  top: 0;
  left:${props=>props.$menuopen ? -1 : -16}rem;
  padding: 0 10px 10px;
  position: absolute;
  background-color: springgreen;
  width: 15rem;
`;

