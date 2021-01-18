import React from 'react'
import Fade from 'react-reveal/Fade';

import '../assets/sass/Home.scss';
import CustomHelmet from './CustomHelmet';

const Home = _ => {

  return (
     <Fade bottom>
      <CustomHelmet 
            titlePage="Nicolas Jiménez"
            contentText="Nicolas Jiménez, desarrollador web Bogotá. Codifico ideas." 
            contentColor="#fff"  
            />
        <section className="section--home">  
          <p>Hi there, i am</p>
          <h2>Nicolas Jiménez</h2>
          <p>I'm a <span></span> </p>
        </section>
     </Fade>
  );
}

export default Home;

