import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getProjectById } from '../helpers/getProjectByName';
import Fade from 'react-reveal/Fade';

import '../assets/sass/templates/DetailsProject.scss';

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

  // const { description } = dataProject;

  return (
    <Fade left>
      <div className="div--detailsProject">
        <button onClick={handleReturn} className="button--return">
          <i className="bx bx-left-arrow"></i> Go back
        </button>
        <div className="div--image"></div>
        <i class="bx bx-mouse"></i>
        <div className="div--info">
          <h2>
            <span>Project Name: </span> {dataProject.name}
          </h2>
          <p>
            <span>Technologys:</span>
          </p>
          <p>
            <span>Description:</span>
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default DetailsProject;
