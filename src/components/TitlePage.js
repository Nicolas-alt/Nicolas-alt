import React from 'react';

import '../assets/sass/components/TitlePage.scss';

const TitlePage = ({ title }) => {
  return (
    <div className="div--titlePage">
      <span></span>
      <p>{title}</p>
    </div>
  );
};

export default TitlePage;
