import React from "react";
import {
  HomeWrapper,
  SectionContact,
  SectionHero,
  SectionLogin,
  SectionPlan,
  SectionShop,
} from "./styles";
import { colors } from "../../assets/styles/colors";
import HeroImg from "../../assets/images/landing/heroImage.jpg";
import ShopImg from "../../assets/images/landing/shopping-cart.png";
import LoginImg from "../../assets/images/landing/Login.png";
const Home = () => {
  return (
    <HomeWrapper>
      <SectionHero
        colorbg={colors.heroBg}
        childText={
          <>
            <h1>Welcome to Marketyfy - Your Ultimate Shopping Destination!</h1>
            <p>
              Discover a world of endless possibilities in online shopping with
              Marketyfy. We bring you the latest trends, premium quality
              products, and unbeatable deals, all in one convenient place.
            </p>
            <p>
              Start your online shopping journey with us today and make every
              purchase a delightful experience. <a href="/Dummy">Shop Now</a> to
              discover the world of convenience, quality, and savings.
            </p>
          </>
        }
        childImg={HeroImg}
      />
      <SectionShop
        colorbg={colors.allWhite}
        childText={
          <>
            <h1>Explore Our Wide Range of Products</h1>
            <p>
              At Marketyfy, we've curated a diverse collection of products to
              cater to all your needs and desires. Whether you're looking for
              the latest fashion trends, high-tech gadgets, home essentials, or
              unique gifts, you'll find it all right here.
            </p>
            <a href="/Dummy" style={{ textAlign: "center" }}>
              Go to shop
            </a>
          </>
        }
        childImg={ShopImg}
        reverse={true}
      />
      <SectionLogin
        colorbg={colors.secWhite}
        childText={
          <>
            <h1>Login to your account</h1>
            <p>
              Already a member? Great to see you again! Log in to your Marketyfy account to access your saved items, track your orders,
              and continue your shopping journey.
            </p>
            <a href="/Dummy" style={{ textAlign: "center" }}>Login or Sign Up</a>
          </>
        }
        childImg={LoginImg}
      />
      <SectionPlan>Plan</SectionPlan>
      <SectionContact>Contact</SectionContact>
    </HomeWrapper>
  );
};

export default Home;
