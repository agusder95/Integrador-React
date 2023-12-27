import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  UserMenu,
} from "./styles";
import { FaUser, FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/images/Logo.png";
import { IconContext } from "react-icons";
import ScrollToTop from "../ScrollToTop";
import MenuContext from "../../context/MenuHmb";
import { setLogin, clearData } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const user = useSelector((state) => state.userInfo);
  const userDispatch = useDispatch();
  const navigate = useNavigate();

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

  const userMenu = () => {
    setUserMenuOpen((prevUserMenuOpen) => !prevUserMenuOpen);
    
  };

  const btnLogin = () => {
    if (user.login) {
      const changueLogin = JSON.parse(localStorage.getItem("userData"));
      changueLogin.login = false;
      userDispatch(setLogin(false));
      Promise.resolve(localStorage.setItem("userData", JSON.stringify(changueLogin)))
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Failed to save user data:", error);
        });
    } else {
      navigate("/Login");
    }
  };

  const btnDeleteAccount = () => {
    localStorage.clear();
    userDispatch(clearData());
    setDeleteAccount(false);
    setUserMenuOpen(false)
    navigate("/")
  }

  /* useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user.login]); */

  return (
    <HeaderWrapper $shrink={isScrolled}>
      <HeaderContainer>
        <Link to="/" onClick={() => ScrollToTop()}>
          <LogoContainer $shrink={isScrolled}>
            <Image src={Logo} alt={"Logo"} />
          </LogoContainer>
        </Link>
        <GeneralContainer>
          <div onClick={userMenu} className="iconsContainer">
            <UserContainer>
              <IconContext.Provider value={{ className: "icons-header" }}>
                <FaUser />
              </IconContext.Provider>
            </UserContainer>
            <CartContainer>
              <IconContext.Provider value={{ className: "icons-header" }}>
                <FaCartShopping />
              </IconContext.Provider>
              <a>{amount}</a>
            </CartContainer>
          </div>

          {userMenuOpen ? (
            <UserMenu>
              <div className="userContainer">
                <p>{user.login ? user.user : "Login"}</p>
                <Button
                  text={user.login ? "Logout" : "Login"}
                  onClick={btnLogin}
                />

                {user.login ? (
                  <p onClick={() => setDeleteAccount(true)}>Delete Account</p>
                ) : null}
                {deleteAccount ? (
                  <>
                    <Button text="Yes" onClick={()=>setConfirmDelete(true)} />
                    {
                      confirmDelete ? <p>Confirm delete your account? <b onClick={()=>btnDeleteAccount()}>YES</b></p> : null
                    }
                    <Button text="No" onClick={() => (
                      setDeleteAccount(false),
                      setConfirmDelete(false)  
                    )} />
                  </>
                ) : null}
              </div>
            </UserMenu>
          ) : null}
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
              <Link to="/Login">Login</Link>
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
              <Link to="/Login">Login</Link>
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
