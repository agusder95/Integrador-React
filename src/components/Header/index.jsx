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
import { fetchApi } from "../../utils/api";
import HamburgerMenu from "../HambMenu";
import Button from "../Button";
import ScrollToTop from "../ScrollToTop";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  /* const [categories, setCategories] = useState([]); */
  const [amount, setAmount] = useState(0);

  /* useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedData = await fetchApi("/products/categories");
        setCategories(fetchedData);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };
    fetchCategories();
  }, []); */

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

  /* const renderCategories = () => {
    return categories.map((category, index) => (
      <li key={index}>
        <a>{category}</a>
      </li>
    ));
  }; */
  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behavior: "smooth" });
    }else{
      window.location.href = '/';
    }
  }
  
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
        {/* <HamburgerMenu className={"HamburgerMenu"}>
          <ul>{renderCategories()}</ul>
        </HamburgerMenu> */}
        <ul>
          <li><Link to='' >Login</Link></li>
          <li><Link to="/Dummy">Dummy </Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          {/* <li><Link to={{
            pathname:"/",
            hash:'#contactUs',
            
          }}>contactUs</Link></li> */}
          <li><p onClick={()=>scrollToSection('contactUs')}>ContactUs</p></li>
        </ul>
      </HeaderCategoriesContainer>
    </HeaderWrapper>
  );
};

export default Header;
