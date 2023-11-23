import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CartContainer,
  GeneralContainer,
  HeaderCategoriesContainer,
  HeaderContainer,
  HeaderWrapper,
  Image,
  LogoContainer,
  UserContainer,
} from "./styles";
import { FaUser, FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/images/Logo.png";
import { IconContext } from "react-icons";
import HamburgerMenu from "../HambMenu";
import ScrollToTop from "../ScrollToTop";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    ScrollToTop();
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
      <HeaderContainer>
        <Link to="/" onClick={() => ScrollToTop()}>
          <LogoContainer $shrink={isScrolled}>
            <Image src={Logo} alt={"Logo"} />
          </LogoContainer>
        </Link>
        <GeneralContainer>
          <UserContainer>
            <IconContext.Provider value={{ className: "icons-header" }}>
              <FaUser />
            </IconContext.Provider>
            <a>User</a>
          </UserContainer>
          <CartContainer>
            <IconContext.Provider value={{ className: "icons-header" }}>
              <FaCartShopping />
            </IconContext.Provider>
            <a>{amount}</a>
          </CartContainer>
        </GeneralContainer>
      </HeaderContainer>
      <HeaderCategoriesContainer>
        <HamburgerMenu className={"HMHeader"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="/Dummy">Dummy </Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </HamburgerMenu>
        <div className="menu2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="/Dummy">Dummy </Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </HeaderCategoriesContainer>
    </HeaderWrapper>
  );
};

export default Header;
