import React from 'react';
import Fade from 'react-reveal/Fade';

import '../assets/sass/templates/Experience.scss';
import CustomHelmet from '../components/CustomHelmet';
import ProjectCar from '../components/ProjectCar';
import TitlePage from '../components/TitlePage';
import { data } from '../utils/data';

export const Experience = () => {
  return (
    <Fade right>
      <CustomHelmet
        titlePage="My experience"
        contentText="Mi experiencia como front dev"
        contentColor="#543"
      />
      <section className="section--experience">
        <TitlePage title="TAKE A LOOK AT" />
        <h2>My Projects</h2>
        <div>
          {data.map((data) => (
            <ProjectCar data={data} />
          ))}
        </div>
      </section>
    </Fade>
  );
};

export default Experience;
