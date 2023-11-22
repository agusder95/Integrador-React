import React from "react";
import {
  CenterHome,
  HomeWrapper,
  PricingCardContainer,
  SectionPlan,
} from "./styles";
import HeroImg from "../../assets/images/landing/heroImage.jpg";
import ShopImg from "../../assets/images/landing/shopping-cart.png";
import LoginImg from "../../assets/images/landing/Login.png";
import ContactUsImg from "../../assets/images/landing/contactUs.jpg";
import { Link } from "react-router-dom";
import SectionHome from "../../components/SectionHome";
import PricingCard from "../../components/PricingCard";
import ContactForm from "../../components/ContactForm";
import Layout from "../../components/layout";

const Home = () => {
  return (
    <HomeWrapper>
      <Layout>
        <CenterHome>
          <SectionHome
            className="hero"
            childText={
              <>
                <h1>
                  Welcome to Marketyfy - Your Ultimate Shopping Destination!
                </h1>
                <p>
                  Discover a world of endless possibilities in online shopping
                  with Marketyfy. We bring you the latest trends, premium
                  quality products, and unbeatable deals, all in one convenient
                  place.
                </p>
                <p>
                  Start your online shopping journey with us today and make
                  every purchase a delightful experience.{" "}
                  <Link to="/Dummy">Shop Now</Link> to discover the world of
                  convenience, quality, and savings.
                </p>
              </>
            }
            childImg={HeroImg}
          />
          <SectionHome
            className={"shop"}
            childText={
              <>
                <h1>Explore Our Wide Range of Products</h1>
                <p>
                  At Marketyfy, we've curated a diverse collection of products
                  to cater to all your needs and desires. Whether you're looking
                  for the latest fashion trends, high-tech gadgets, home
                  essentials, or unique gifts, you'll find it all right here.
                </p>
                <a href="/Dummy" style={{ textAlign: "center" }}>
                  Go to shop
                </a>
              </>
            }
            childImg={ShopImg}
          />
          <SectionHome
            className={"login"}
            childText={
              <>
                <h1>Login to your account</h1>
                <p>
                  Already a member? Great to see you again! Log in to your
                  Marketyfy account to access your saved items, track your
                  orders, and continue your shopping journey.
                </p>
                <Link to="/Dummy" style={{ textAlign: "center" }}>
                  Login or Sign Up
                </Link>
              </>
            }
            childImg={LoginImg}
          />
          <SectionPlan>
            <h1>Choose your plan</h1>
            <PricingCardContainer>
              <PricingCard className={"free"} title={"Free"} price={"$0"}>
                <li>No coupon</li>
                <li>Slow shipping</li>
                <li>Purchase Limit $100</li>
              </PricingCard>
              <PricingCard className={"basic"} title={"Basic"} price={"$50"}>
                <li>Limited coupon</li>
                <li>Normal shipping</li>
                <li>Purchase Limit $1000</li>
              </PricingCard>
              <PricingCard
                className={"premium"}
                title={"Premium"}
                price={"$100"}
              >
                <li>Unlimited coupon</li>
                <li>Special offers</li>
                <li>Fast shipping</li>
                <li>No purchase limit</li>
              </PricingCard>
            </PricingCardContainer>
          </SectionPlan>
          <SectionHome
            id={"contactUs"}
            className={"contactUs"}
            childText={<ContactForm />}
            childImg={ContactUsImg}
          ></SectionHome>
        </CenterHome>
      </Layout>
    </HomeWrapper>
  );
};

export default Home;
