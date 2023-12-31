import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { CenterWrapper } from '../../components/Center/styles';

export const HomeWrapper = styled.div`
`;

export const CenterHome = styled(CenterWrapper)`
  background-color: ${colors.heroBg};

  .hero{
    background-color: ${colors.heroBg};
  }
  .shop{
    background-color: ${colors.allWhite};
    flex-direction:row-reverse;
  }
  .login{
    background-color: ${colors.secWhite};
  }
  .contactUs{
    background-color: ${colors.violet};
  }
  
`;


export const SectionPlan = styled.section`
  text-align: center;
  padding: 2rem 0;
  background-color: ${colors.mainWhite};
  h1{
    padding: 2rem 0;
  }

`;


export const PricingCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  flex-direction:row;
  flex-wrap:wrap;
  li{
    margin: .5rem 0;
  }

`;
