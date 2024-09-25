import { Link } from "react-router-dom";
import whiteCross from "../../assets/images/white-cross.png";
import "./NavMenu.scss";

type NavMenuProps = {
  onClose: () => void;
};

const NavMenu = ({ onClose }: NavMenuProps) => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          src={whiteCross}
          alt="Close menu"
          className="nav-menu__cross"
          onClick={onClose}
        />
        <Link to="/" className="nav-menu__item" onClick={onClose}>
          Home
        </Link>

        <Link to="/skincare" className="nav-menu__item" onClick={onClose}>
          Skincare
        </Link>

        <Link to="/makeup" className="nav-menu__item" onClick={onClose}>
          Makeup
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
