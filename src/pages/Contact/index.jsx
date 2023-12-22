import React from "react";
import { ContactContainer, ContactWrapper, ImgContactContainer } from "./styles";
import Layout from "../../components/layout";
import ContactForm from "../../components/ContactForm";
import ContactImg from "../../assets/images/landing/contactUs.jpg";
import Image from "../../components/Image";
const Contact = () => {
  return (
    <ContactWrapper>
      <Layout>
        <ContactContainer>
          <ContactForm />
          <ImgContactContainer>
            <Image src={ContactImg} alt={"contactImg"} />
          </ImgContactContainer>
        </ContactContainer>
      </Layout>
    </ContactWrapper>
  );
};

export default Contact;
