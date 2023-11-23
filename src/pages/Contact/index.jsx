import React from "react";
import { ContactContainer, ContactWrapper } from "./styles";
import Layout from "../../components/layout";
import ContactForm from "../../components/ContactForm";
import ContactImg from "../../assets/images/landing/contactUs.jpg";
import SectionHome from "../../components/SectionHome";
const Contact = () => {
  return (
    <ContactWrapper>
      <Layout>
        <ContactContainer>
          <SectionHome
            id={"contactUs"}
            className={"contactUs"}
            childText={<ContactForm />}
            childImg={ContactImg}
          />
        </ContactContainer>
      </Layout>
    </ContactWrapper>
  );
};

export default Contact;
