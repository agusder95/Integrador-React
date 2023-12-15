import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
export const ShopCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 18rem;
  height: 27rem;
  padding: 1rem;
  margin: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 20px;

  .shopBtn {
    position: absolute;
    bottom: 20px;
    background-color: ${colors.orange};
  } 
`;

export const ShopCardImgContainer = styled.div`
  
`;