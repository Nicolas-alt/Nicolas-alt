import React from 'react';

import '../assets/sass/templates/Experience.scss';
import CustomHelmet from '../components/CustomHelmet';
import ProjectCard from '../components/ProjectCard';
import TitlePage from '../components/TitlePage';
import { data } from '../utils/data';

export const Experience = () => {
  return (
    <>
      <CustomHelmet
        titlePage="My experience"
        contentText="Mi experiencia como front dev"
        contentColor="#543"
      />
      <section className="section--experience">
        <TitlePage title="TAKE A LOOK AT" />
        <h2>My Projects</h2>
        <div className="div--projects">
          {data.map((data) => (
            <ProjectCard data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
