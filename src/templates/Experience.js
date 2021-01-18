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
      <section className="section--experience">Experience</section>
    </Fade>
  );
};

export default Experience;
