import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CartContainer,
  GeneralContainer,
  HMHeader,
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
import ScrollToTop from "../ScrollToTop";
import MenuContext from "../../context/MenuHmb";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const [amount, setAmount] = useState(0);
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const toggleMenu = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);
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
        <HMHeader>
          <div className="colorBar"></div>
          <ul onClick={toggleMenu}>
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
        </HMHeader>

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
