import React from "react";
import { FooterWrapper, InfoContainer } from "./styles";

import {
  FaEnvelope,
  FaHouse,
  FaLocationDot,
  FaPhone,
  FaUserAstronaut,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { IconContext } from "react-icons";
const Footer = () => {
  return (
    <FooterWrapper>
      <InfoContainer>
        <li>
          <IconContext.Provider value={{ className: "iconFooter" }}>
            <FaEnvelope />
          </IconContext.Provider>
          <p>
            Contact: <a>Marketify@contact.com</a>
          </p>
        </li>
        <li>
          <IconContext.Provider value={{ className: "iconFooter" }}>
            <FaHouse />
          </IconContext.Provider>
          <p>Address: fake street 123</p>
        </li>
        <li>
          <IconContext.Provider value={{ className: "iconFooter" }}>
            <FaLocationDot />
          </IconContext.Provider>
          <p>ZIP: x4352</p>
        </li>
        <li>
          <IconContext.Provider value={{ className: "iconFooter" }}>
            <FaPhone />
          </IconContext.Provider>
          <p>Phone: 543-543228</p>
        </li>
      </InfoContainer>
      <InfoContainer>
        <li className="titleFooter">
          <p>Developed by</p>
        </li>
        <li>
          <IconContext.Provider value={{ className: "iconFooter" }}>
            <FaUserAstronaut />
          </IconContext.Provider>
          <p>Agustin De Robles</p>
        </li>
        <li>
          <IconContext.Provider value={{ className: "iconFooter" }}>
            <FaLinkedin />
          </IconContext.Provider>
          <a
            href="https://www.linkedin.com/in/agustin-de-robles-62a965214/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <IconContext.Provider value={{ className: "iconFooter" }}>
            <FaGithub />
          </IconContext.Provider>
          <a href="https://github.com/agusder95" target="_blank">
            Github
          </a>
        </li>
      </InfoContainer>
    </FooterWrapper>
  );
};

export default Footer;
