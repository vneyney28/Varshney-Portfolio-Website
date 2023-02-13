import "./navbar.css";
import Data from "./data";
import navimg from "../../assests/nav.img.jpg";
// import { IoIosColorPalette } from "react-icons/io";
const NavBar = () => {
  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={navimg} alt="logo" />
        </a>
        <ul className="nav__menu">
          {Data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon">{/* <IoIosColorPalette /> */}</button>
      </div>
    </nav>
  );
};

export default NavBar;
