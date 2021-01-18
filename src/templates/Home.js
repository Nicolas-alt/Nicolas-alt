import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

import '../assets/sass/templates/Home.scss';
import CustomHelmet from '../components/CustomHelmet';

const Home = () => {
  useEffect(() => {
    let dev = new Typed('#dev', {
      strings: [
        'Front dev 🎨',
        'Desarrollador 🧩',
        'Entusiasta 🤩',
        'Developer 👾',
        'Web Developer 💻',
      ],
      loop: true,
      startDelay: 1000,
      typeSpeed: 80,
      backSpeed: 80,
    });
  }, []);

  return (
    <Fade bottom>
      <CustomHelmet
        titlePage="Nicolas Jiménez"
        contentText="Nicolas Jiménez, desarrollador web Bogotá. Codifico ideas."
        contentColor="#fff"
      />
      <section className="section--home">
        <p>Hi there, i am</p>
        <h2>Nicolas Jiménez</h2>
        <p className="p--typed">
          I'm a <span id="dev"></span>
        </p>
        <Link to="/about">
          <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </section>
    </Fade>
  );
};

export default Home;
