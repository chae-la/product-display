import { Link } from "react-router-dom";
import "./Nav.scss"
import Button from "../Button/Button";


const Nav = () => {
return (
    <div className="nav">
    <nav className="nav__buttons">
    <Link to="/" className="nav__buttons">Home</Link>
    <Link to ="/store" className="nav__buttons">Store</Link>
</nav>
    <img src="https://www.svgrepo.com/show/4139/shopping-basket.svg" className="nav__image"/>
    <div className="nav__number">3</div>
    </div>

)
}

export default Nav;