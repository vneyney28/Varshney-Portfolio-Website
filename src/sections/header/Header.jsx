import { useEffect } from "react";
import headerimg from "../../assests/header.img.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={headerimg} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Varshney Aditya</h3>
        <p data-aos="fade-up">
          Tech-savvy React dev based in Delhi, India. Currently enrolled in The
          third year of Computer Science and Engineering with a Specializationon
          in Data Science. Passionate about CS, Data Science and Deep Learning -
          Contributed to various open source platforms. Sports Enthusiast with a
          university gold medal in middle-long distance Running & a part of the
          university gold medalist football team (4x Zonals, 2×State).
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contacts" className="btn primary">
            Get In Touch
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
