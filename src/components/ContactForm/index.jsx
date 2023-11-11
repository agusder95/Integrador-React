import React from "react";
import { ContactFormWrapper } from "./styles";
import Button from "../Button";
const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <h1>Contact Us</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <Button className={"contactFormBtn"} text={"Send Message"} />
    </ContactFormWrapper>
  );
};

export default ContactForm;
