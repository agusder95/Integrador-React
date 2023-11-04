import React from 'react'
import { HeroWrapper, ImgHeroConrainer } from './style'
import Image from '../../../components/Image'
import HeroImg from "../../../assets/images/heroImage.jpg"
const HeroSection = () => {
  return (
    <HeroWrapper>
     <div className='txtBlock'>
          <h1>Welcome to Marketyfy - Your Ultimate Shopping Destination!</h1>
          <p>Discover a world of endless possibilities in online shopping with Marketyfy. We bring you the latest trends, premium quality products, and unbeatable deals, all in one convenient place.</p>
          <p>Start your online shopping journey with us today and make every purchase a delightful experience. <a href=''>Shop Now</a> to discover the world of convenience, quality, and savings.</p>
     </div>
     <div className='imgBlock'>
          <ImgHeroConrainer>
               <Image src={HeroImg} alt="Hero Image" />
          </ImgHeroConrainer>
     </div>
    </HeroWrapper>
  )
}

export default HeroSection