import "./contacts.css";
import data from "./data";

const Contacts = () => {
  return (
    <section id="contacts">
      <h2>Get in Touch</h2>
      <p></p>
      <div className="container contact__container" data-aos="fade-up">
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
    </section>
  );
};

export default Contacts;
