import React from 'react'
import {Helmet} from "react-helmet"

import '../assets/sass/Experience.scss'

export const Experience = _ => {
  return (
    <>
       <Helmet>
            <title>My experience</title>
            <meta name="description" content="Mi experiencia como front dev" />
            <meta name="theme-color" content="#ffff" />
        </Helmet>
    <section className="section--experience">
      Experience 
    </section>
  
    </>
  )
}

export default Experience;
