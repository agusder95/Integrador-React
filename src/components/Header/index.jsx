import React, { useEffect, useState } from "react";
import { HeaderWrapper, Image } from "./styles";

import Logo from "../../assets/images/Logo.png"; 
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper $shrink={isScrolled}>
      <h1>Hola soy el Header</h1>
      <Image src={Logo}  alt={"Logo"} />
    </HeaderWrapper>
  );
};

export default Header;
