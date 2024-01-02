colors
import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const CartCounterWrapper = styled.div`
  display: flex;
  width:100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.allWhite};
  border-radius: 10px;
  border: 1px solid ${colors.black};
  padding: 0 .5rem;
  button{
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
  }
`;