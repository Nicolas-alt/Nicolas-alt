import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getProjectById } from '../helpers/getProjectByName';
import Fade from 'react-reveal/Fade';

const DetailsProject = ({ history }) => {
  const params = useParams();
  const { name } = params;

  if (!name) return <Redirect to="/" />;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const dataProject = getProjectById(name);

  const { description } = dataProject;

  return (
    <Fade left>
      <button onClick={handleReturn}>
        <i className="bx bx-left-arrow"></i>
      </button>

      <h2>{dataProject.name}</h2>
      <p>{description}</p>
    </Fade>
  );
};

export default DetailsProject;
