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
          Dedicated individual with expertise in Data Structures and Algorithms (DSA) and a strong background in Front-End Web Development. Armed with a solid academic foundation in computer science, I bring a dynamic skill set that includes proficiency in HTML, CSS, JavaScript, and modern web frameworks. I am adept at problem-solving, quick to adapt to emerging technologies, and thrive in collaborative environments. Sports Enthusiast with a university gold medal in middle-long distance Running & a part of the university gold medalist football team (4x Zonals, 2×State).
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
