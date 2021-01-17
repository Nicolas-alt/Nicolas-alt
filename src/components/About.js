import React from 'react'
import {Helmet} from "react-helmet"

import '../assets/sass/About.scss'
const About = _ => {
    return (
        <>
        <Helmet>
            <title>About Me</title>
            <meta name="description" content="Un vistazo acerca de mi vida profesional." />
            <meta name="theme-color" content="#0545" />
        </Helmet>
        <section className="section--about">
            About
        </section>
        
        </>
    )
}

export default About
