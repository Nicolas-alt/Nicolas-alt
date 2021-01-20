import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCar = ({ data }) => {
  const { name } = data;
  return (
    <Link to={'/project/' + name}>
      <div>
        <p>{name}</p>
        <h3>Project 01</h3>
      </div>
    </Link>
  );
};

export default ProjectCar;
