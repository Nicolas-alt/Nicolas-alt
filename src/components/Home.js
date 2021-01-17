import React from 'react'
import {Helmet} from "react-helmet"

import '../assets/sass/Home.scss';

const Home = _ => {
  {/*useEffect(() => {easter()}, [])*/}
{/* 
     <a classNameName="a--social" href="https://github.com/Nicolas-alt" target="_blank">
              <i classNameName='bx bxl-github'></i>
            </a>
            <a classNameName="a--social" href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
              target="_blank">
              <i classNameName='bx bxl-linkedin' ></i>
            </a>
            <a classNameName="a--social" href="https://twitter.com/Nicolas35103573" target="_blank">
              <i classNameName='bx bxl-twitter' ></i>
            </a>
            <a classNameName="a--social" href="https://gitlab.com/Nicolas-alt" target="_blank">
              <i classNameName='bx bxl-gitlab'></i>
            </a>
          </div>
    
    <h2>Nicolas Jiménez</h2>
    Desarrollador front-end, estudiante en una tecnología en
    desarrollo de software, apasionado por el desarrollo web.
    En sus ratos libres disfruta unas buenas partidas en Pubg.
  
  */}
  return (
    <>
      <Helmet>
          <title>Nicolas Jiménez</title>
          <meta name="description" content="Nicolas Jiménez, desarrollador web Bogotá. Codifico ideas." />
          <meta name="theme-color" content="#000000" />
      </Helmet>
      <section className="section--home">  
          Home
      </section>
    </>
  );
}

export default Home;

