import "../styles/Hero.css";
import Profile from "../assets/images/Profile.jpg";
import {motion} from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-section" id="about">

      <motion.div className="hero-container">

        <div className="hero-content">

          <p className="hero-tag">
            MERN Stack Developer
          </p>

          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Siva Nishanth</span>
          </h1>

          <p className="hero-description">
            Backend-focused Full Stack Developer specializing
            in scalable MERN applications and secure REST APIs.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img src={Profile} alt="Profile" />
        </div>

      </motion.div>

    </section>
  );
}