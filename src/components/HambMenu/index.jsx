import React, { useContext, useState } from "react";
import { HamburgerMenuWrapper, MenuContent, ToggleButon, Bar } from "./styles";
import MenuContext from "../../context/MenuHmb";

const HamburgerMenu = ({ children, className }) => {
  const {menuOpen, setMenuOpen} = useContext(MenuContext)
  const toggleMenu = () => setMenuOpen(prevMenuOpen => !prevMenuOpen);
  return (
    <HamburgerMenuWrapper className={` ${className}`} >
      <ToggleButon onClick={toggleMenu} >
        <Bar $menuopen={menuOpen}/>
        <Bar $menuopen={menuOpen}/>
        <Bar $menuopen={menuOpen}/>
      </ToggleButon>
      <MenuContent $menuopen={menuOpen} className="dataContent" >{children}</MenuContent>
    </HamburgerMenuWrapper>
  );
};

export default HamburgerMenu;

