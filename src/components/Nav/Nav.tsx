

import { useState } from "react";
import "./Nav.scss";
import menu from "../../assets/images/menu.webp"
import NavMenu from "../NavMenu/NavMenu";

const Nav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return(
    <div className="nav">
        {showNav && <NavMenu onClose={toggleNav} />}
        <img src={menu} className="nav__menu" alt="Menu Icon" onClick={toggleNav}/>
    </div>
  )
};

export default Nav;
