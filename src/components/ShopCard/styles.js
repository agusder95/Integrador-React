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
  /* border: 1px solid black; */
  border-radius: 20px;

  box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.35);

  .shopBtn {
    position: absolute;
    bottom: 20px;
    background-color: ${colors.orange};

    &:active{
      background-color: ${colors.darkOrange};
    }
  }
  .diseabledBtn{
    background-color: ${colors.btnDiseabled};
  }
`;

export const ShopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 7rem;
  p{
    text-align: center;
    margin: 1rem 0;
  }
`;

export const ShopCardImgContainer = styled.div`
  height:12rem;
  img{
    border-radius: 10px;
    border: 1px solid black;
  }
`;