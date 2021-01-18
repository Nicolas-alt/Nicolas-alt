import React from 'react';
import Fade from 'react-reveal/Fade';

import '../assets/sass/templates/About.scss';
import CustomHelmet from '../components/CustomHelmet';
const About = () => {
  return (
    <Fade right>
      <CustomHelmet
        titlePage="About Me"
        contentText="Un vistazo acerca de mi vida profesional."
        contentColor="#0545"
      />
      <section className="section--about">
        About Desarrollador front-end, estudiante en una tecnología en
        desarrollo de software, apasionado por el desarrollo web. En sus ratos
        libres disfruta unas buenas partidas en Pubg.
        <a
          className="a--social"
          href="https://github.com/Nicolas-alt"
          target="_blank"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          className="a--social"
          href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
          target="_blank"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          className="a--social"
          href="https://twitter.com/Nicolas35103573"
          target="_blank"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          className="a--social"
          href="https://gitlab.com/Nicolas-alt"
          target="_blank"
        >
          <i className="bx bxl-gitlab"></i>
        </a>
      </section>
    </Fade>
  );
};

export default About;
