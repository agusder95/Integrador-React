import React from 'react'
import { HomeWrapper, SectionContact, SectionHero, SectionLogin, SectionPlan, SectionShop } from './styles'

const Home = () => {
  return (
    <HomeWrapper>
      <SectionHero>Hero</SectionHero>
      <SectionShop>Shop</SectionShop>
      <SectionLogin>Login</SectionLogin>
      <SectionPlan>Plan</SectionPlan>
      <SectionContact>Contact</SectionContact>
    </HomeWrapper>
  )
}

export default Home

