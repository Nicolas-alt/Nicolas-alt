import React from 'react';
import Fade from 'react-reveal/Fade';

import CustomHelmet from '../components/CustomHelmet';
import '../assets/sass/templates/About.scss';
import movile from '../assets/svg/9.svg';
import TitlePage from '../components/TitlePage';

const About = () => {
  return (
    <Fade right>
      <CustomHelmet
        titlePage="About Me"
        contentText="Un vistazo acerca de mi vida profesional."
        contentColor="#0545"
      />
      <section className="section--about">
        <TitlePage title="Resume" />
        <h2>About Me</h2>

        <div className="div--info">
          <img src={movile} alt="Movile" />
          <div className="div--text">
            <h3>I'm a web developer</h3>
            <p>
              Desarrollador front-end, estudiante en una tecnología en
              desarrollo de software, apasionado por el desarrollo web. En sus
              ratos libres disfruta unas buenas partidas en Pubg.
            </p>
            <div>
              <h4>My Stack</h4>
              <div>
                <i class="bx bxl-javascript"></i>
                <i class="bx bxl-react"></i>
                <i class="bx bxl-nodejs"></i>
                <i class="bx bxs-data"></i>
                <i class="bx bxl-git"></i>
                <i class="bx bxl-sass"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default About;
