import React, { useEffect, useState } from "react";
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedData = await fetchApi("/products/categories");
        setCategories(fetchedData);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderCategories = () => {
    return categories.map((category, index) => (
      <li key={index}>
        <a>{category}</a>
      </li>
    ));
  };

  return (
    <HeaderWrapper>
      <HeaderContainer $shrink={isScrolled}>
        <LogoContainer onClick={()=>{window.location.href = "/"}}>
          <Image src={Logo} alt={"Logo"} />
        </LogoContainer>
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
        <ul>
          {renderCategories()}
        </ul>
      </HeaderCategoriesContainer>
    </HeaderWrapper>
  );
};

export default Header;
