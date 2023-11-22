import React, { useState } from "react";
import { HamburgerMenuWrapper, MenuContent, ToggleButon, Bar } from "./styles";

const HamburgerMenu = ({ children, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevMenuOpen => !prevMenuOpen);
  return (
    <HamburgerMenuWrapper className={` ${className}`} >
      <ToggleButon onClick={toggleMenu} >
        <Bar $menuopen={menuOpen}/>
        <Bar $menuopen={menuOpen}/>
        <Bar $menuopen={menuOpen}/>
      </ToggleButon>
      <MenuContent $menuopen={menuOpen} >{children}</MenuContent>
    </HamburgerMenuWrapper>
  );
};

export default HamburgerMenu;

