import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/sass/components/ProjectCard.scss';

const ProjectCard = ({ data }) => {
  const { name } = data;
  return (
    <Link to={'/project/' + name} className="a--card">
      <div>
        <p>{name}</p>
        <h3>Project 01</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
