import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size:small;
  }
`;

export const CounterContaienr = styled.div`
  width: 8rem;

  .counter {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      position: absolute;
      z-index: 1;
      padding: 0 0.5rem;
      width: 2rem;
      height: 100%;
      border: none;
      background-color: transparent;
      &.btnAdd {
        left: 2px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &.btnRemove {
        right: 2px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      &:active {
        background-color: gray;
        color: white;
      }
    }
  }
`;

export const InputContainer = styled.input`
  border-radius: 10px;
  padding: 0.5rem 2rem;
  width: 100%;
  z-index: 0;
  text-align: center;
  border: none;
`;
