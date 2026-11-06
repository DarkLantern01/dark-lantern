import Services from "./Components/Services";
import Articles from "./Components/Articles";
import aboutImage from "./imgs/aboutmob.jpg";
import cardImage from "./imgs/cards.jpg";
import cardImage2 from "./imgs/cards2.jpg";
import cardImage3 from "./imgs/cards3.jpg";
import { useState } from "react";
import "./App.css";

const servicesTitle = [
  {
    title: "Creating logo",
    discription: "Any successful business needs a fantastic logo, dosen't it?",
    icon: "bi bi-aspect-ratio",
  },
  {
    title: "Web developing",
    discription: "Having a website can help you to increase your income",
    icon: "bi bi-bar-chart-line",
  },
  {
    title: "Moderating",
    discription: "I can help you to have a more dynamic website",
    icon: "bi bi-clipboard-data",
  },
];

const articlesTitle = [
  {
    subject: "Tutorial",
    title: "How to learn HTML/CSS?",
    time: "7 min",
    tech: "HTML",
    discription:
      "Learning HTML/CSS is the first step of being Front-End developer. So read carefully!",
    author: "Amir",
    date: "2026/10/10",
    img: cardImage,
  },
  {
    subject: "Tutorial",
    title: "How to learn React?",
    time: "28 min",
    tech: "React",
    discription:
      "Moment of truth. This is the real developing! Developing with React is a giant advantage. ",
    author: "Amir",
    date: "2026/10/20",
    img: cardImage2,
  },
  {
    subject: "Tutorial",
    title: "How to learn JavaScript?",
    time: "12 min",
    tech: "JavaScript",
    discription: "Need a dynamic website? don't miss this article!",
    author: "Amir",
    date: "2026/10/14",
    img: cardImage3,
  },
];

export default function App() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {/* Header */}
      {/* Navbar */}
      <section id="Home">
        <nav className="navbar">
          <div className="nav-header">
            <h3>Dark Lantern</h3>
            <button
              className={"nav-toggle"}
              onClick={() => setDisplay(!display)}
            >
              {display && <i className="bi bi-x"></i>}
              {!display && <i class="bi bi-list"></i>}
            </button>
          </div>

          <ul className={`nav-links ${display ? "show-links" : ""}`}>
            <li>
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#About">
                About me
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Service">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Article">
                Articles
              </a>
            </li>
          </ul>
          <ul className="nav-icons">
            <li>
              <a href="#" className="nav-icon">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="nav-icon">
                <i class="bi bi-twitter-x"></i>
              </a>
            </li>
            <li>
              <a href="#" className="nav-icon">
                <i class="bi bi-telegram"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* /Navbar */}
        {/* hero */}

        <div className="hero">
          <div className="hero-banner">
            <h1>
              Be <span className="codeman">Codeman!</span>
            </h1>
            <p className="p-banner">
              Turning ideas into clean code, <br /> one line at a time
            </p>
            <div className="explore-btn">
            <a href="#" className="btn btn-hero">
              Explore my work 
              <i class="bi bi-arrow-right"></i>
            </a>
            </div>
          </div>
        </div>

        {/* /hero */}
      </section>
      {/* /Header */}
      {/* About */}

      <section className="about" id="About">
        <div className="title-about-section">
          <h2 className="title-about">
            About <span className="me">me</span>
          </h2>
        </div>
        <div className="content-about-section">
          <div className="img-section">
            <img src={aboutImage} alt="coding-image" className="about-image" />
          </div>
          <div className="about-content">
            <span className="who-title-div">
              <h3 className="who-title">WHO AM I?</h3>
            </span>
            <div className="p-container">
              <p className="p-about">
                Hi! My name is Amir. I'm a programmer, specially a{" "}
                <span className="Front-End">Front-End</span> one. I always
                wanted to create something and coding gives it.
              </p>
              <p className="p-about-2">
                But it is not that simple! Programming like any career is hard
                to be learned. To be honest, I'm a junior programer but just for
                now. It doesn't need to be mentioned that the key of success is
                keep practicing. Good luck!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* /About */}
      {/* Services */}

      <section className="service" id="Service">
        <div className="service-con">
          <div className="service-title">
            <h2>Services</h2>
          </div>
          <div className="service-content">
            {servicesTitle.map((service) => (
              <Services
                key={service.title}
                title={service.title}
                discription={service.discription}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* /Services */}
      {/* Articles */}

      <section className="article" id="Article">
        <div className="title-articles">
          <h2>Articles</h2>
        </div>
        <div className="articles-main-container">
          {articlesTitle.map((article) => (
            <Articles
              key={article.title}
              subject={article.subject}
              title={article.title}
              time={article.time}
              tech={article.tech}
              discription={article.discription}
              author={article.author}
              date={article.date}
              img={article.img}
            />
          ))}
        </div>
      </section>

      {/* /Articles */}
      {/* Footer  */}

      <footer className="footer">
        <ul className="footer-links">
          <a href="#Home">Home</a>
          <a href="#About">About me</a>
          <a href="#Service">Services</a>
          <a href="#Article">Articles</a>
        </ul>
        <ul className="social">
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#">
            <i class="bi bi-telegram"></i>
          </a>
        </ul>
        <p className="copyright">
          <i class="bi bi-c-circle"></i> All rights reserved
        </p>
      </footer>

      {/* /Footer */}
    </>
  );
}
