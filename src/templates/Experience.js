import React from 'react';
import Flip from 'react-reveal/Flip';

import '../assets/sass/templates/Experience.scss';
import CustomHelmet from '../components/CustomHelmet';

export const Experience = () => {
  return (
    <Flip left>
      <CustomHelmet
        titlePage="My experience"
        contentText="Mi experiencia como front dev"
        contentColor="#543"
      />
      <section className="section--experience">Experience</section>
    </Flip>
  );
};

export default Experience;
