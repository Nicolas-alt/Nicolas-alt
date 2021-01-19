import React from 'react';
import Fade from 'react-reveal/Fade';

import '../assets/sass/templates/Experience.scss';
import CustomHelmet from '../components/CustomHelmet';

export const Experience = () => {
  return (
    <Fade right>
      <CustomHelmet
        titlePage="My experience"
        contentText="Mi experiencia como front dev"
        contentColor="#543"
      />
      <section className="section--experience">
        <div>
          <span></span>
          <p>TAKE A LOOK AT</p>
        </div>
        <h3>My Projects</h3>
      </section>
    </Fade>
  );
};

export default Experience;
