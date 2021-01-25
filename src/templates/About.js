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

        <img src={movile} alt="Movile" />
        <div className="div--text">
          <h3>I'm a web developer</h3>
          <p>
            Desarrollador front-end, estudiante en una tecnología en desarrollo
            de software, apasionado por el desarrollo web. En sus ratos libres
            disfruta unas buenas partidas en Pubg. Me interesa el desarrollo de
            aplicaciones híbridas con JavaScript y Flutter
          </p>
          <div className="div--tech">
            <h4>My Stack</h4>
            <div>
              <i className="bx bxl-javascript" style={{ color: '#F0DB4F' }}></i>
              <i className="bx bxl-react" style={{ color: '#60DAFB' }}></i>
              <i className="bx bxl-nodejs" style={{ color: '#3C873A' }}></i>
              <i className="bx bxs-data" style={{ color: '#CCD1D1' }}></i>
              <i className="bx bxl-git" style={{ color: '#F34F29' }}></i>
              <i className="bx bxl-sass" style={{ color: '#CC6699' }}></i>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default About;
