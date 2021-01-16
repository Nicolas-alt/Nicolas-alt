import React, { useEffect } from 'react'

import '../assets/sass/Home.scss';
import Wave from '../templates/Wave';
import { easter } from '../utils/easterEgg';

export const Home = _ => {
  {/*useEffect(() => {easter()}, [])*/}
  return (
    <>  
      Home
    <Wave /> 
    </>
  );
}

export default Home;

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