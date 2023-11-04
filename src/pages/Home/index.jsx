import React from 'react'
import { HomeWrapper, SectionContact, SectionHero, SectionLogin, SectionPlan, SectionShop } from './styles'
import HeroSection from './HeroSection/hero'

const Home = () => {
  return (
    <HomeWrapper>
      <SectionHero>
        <HeroSection/>
      </SectionHero>
      <SectionShop>Shop</SectionShop>
      <SectionLogin>Login</SectionLogin>
      <SectionPlan>Plan</SectionPlan>
      <SectionContact>Contact</SectionContact>
    </HomeWrapper>
  )
}

export default Home

