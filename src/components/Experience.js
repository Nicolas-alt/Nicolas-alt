import React from 'react'
import {Helmet} from "react-helmet"
import Flip from 'react-reveal/Flip';

import '../assets/sass/Experience.scss'

export const Experience = _ => {
  return (
    <>
     <Flip left>

      <Helmet>
          <title>My experience</title>
          <meta name="description" content="Mi experiencia como front dev" />
          <meta name="theme-color" content="#ffff" />
      </Helmet>
      <section className="section--experience">
        Experience 
      </section>
     </Flip>
    </>
  )
}

export default Experience;
