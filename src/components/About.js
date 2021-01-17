import React from 'react'
import {Helmet} from "react-helmet"
import Flip from 'react-reveal/Flip';

import '../assets/sass/About.scss'
const About = _ => {
    return (
        <>
        <Flip left>
            <Helmet>
                <title>About Me</title>
                <meta name="description" content="Un vistazo acerca de mi vida profesional." />
                <meta name="theme-color" content="#0545" />
            </Helmet>
            <section className="section--about">
                About
            </section>
        </Flip>
        </>
    )
}

export default About
