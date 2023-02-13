import AboutImage from "../../assests/about-me.jpg";
import CV from "../../assests/VARSHNEY-CV.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Fine balance of Extroversion & Introversion has made me a reflective
            And a contemplative person. I try to infuse energy into all my work
            by Vigor & vibrancy. Prefers to work diligently during pressure
            hours. Believes in taking analytical decisions based on available
            information. I try to carry & conduct myself always in a
            Professional demeanor. I have proven to be a charismatic team player
            and leader through my actions.
          </p>
          <p>Check out my CV below!</p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
