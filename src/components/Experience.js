import React from 'react'
import Flip from 'react-reveal/Flip';

import '../assets/sass/Experience.scss'
import CustomHelmet from './CustomHelmet';

export const Experience = _ => {
  return (
     <Flip left>
      <CustomHelmet 
        titlePage="My experience"
        contentText="Mi experiencia como front dev"
        contentColor="#543" 
      />
      <section className="section--experience">
        Experience 
      </section>
     </Flip>
  )
}

export default Experience;
