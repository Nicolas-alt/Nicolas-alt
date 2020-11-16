import '../assets/sass/App.scss';

export const  Home = _ => {
  return (
        <>
        <section className="section--container" id="primary">
        <div className="div--img ">
          <div className="div--typedStrings">
            <div id="typed-strings">
              <p className="p--code">
                <span className="span--blue">import</span>
                <span className="span--white">Greeting</span>
                <span className="span--blue">from</span>
                <span className="span--green">'Nicolas.hi';</span>
              </p>
              <p>
                <span id="typed"></span>
              </p>
            </div>
          </div>
          <img  className="img--main" src="../../../assets/svg/2.svg" alt="Imagen editor texto." />
        </div>
        
        {/* <!-- For moviles devices --> */}
    
        <div className="div--imgDevice">
        </div>
        <div className="div--text">    
        <div className="div--appNavBar">
        </div>
          <h1 className="animate__animated  animate__fadeInUp">Nicolas <br /><span> Jiménez</span></h1>
            <p className="p--intro">- <span  className="span--intro" id="dev"></span></p>
            <div className="div--social">
              <a className="a--social" href="https://github.com/Nicolas-alt" target="_blank"> <i className='bx bxl-github'></i></a>
              <a className="a--social" href="https://www.linkedin.com/in/nicolas-jimenez-b20660184/" target="_blank"> <i className='bx bxl-linkedin' ></i></a>
              <a className="a--social" href="https://twitter.com/Nicolas35103573" target="_blank"> <i className='bx bxl-twitter' ></i></a>
              <a className="a--social" href="https://gitlab.com/Nicolas-alt" target="_blank"> <i className='bx bxl-gitlab'></i></a>
            </div>
            <a  className="div--social a--projects" href="#/experiencia" > Mis proyectos 
              <img src="../../../assets/svg/icon-angle-right.svg" alt="Arrow icon" /> 
            </a>
        </div>
        </section>
        
        <section className="section--secundary" id="secundary">
        <div className="div--gridContainer">
            <div className="div--info Card">
              <div className="div--cardContainer">
                  <div className="div--cardColor"></div>
                  <div className="div--cardText">
                    <div>
                      <h2>Nicolas Jiménez</h2>
                      <p>Desarrollador front-end, estudiante en una tecnología en
                        desarrollo de software, apasionado por el desarrollo web.
                        En sus ratos libres disfruta unas buenas partidas en Pubg.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
        
              <div className="Card div--cardItem div--cardItem1">
                <img className="img--cardImage" src="../../../assets/svg/16.svg" alt="diseño web imagen" />
                <h2>Diseño personalizado</h2>
              </div>
              
              <div className="Card div--cardItem div--cardItem2">
                <img className="img--cardImage" src="../../../assets/svg/15.svg" alt="responsive imagen" />
                <h2>Web responsive</h2>
              </div>
        
              <div className="Card div--cardItem div--cardItem3">
                <img className="img--cardImage" src="../../../assets/svg/14.svg" alt="Imagen calidad" />
                <h2>Alta calidad</h2>
              </div>
        </div>
        
        <a className="a--rocket" href="#primary">
          <img className="img--rocket" src="../../../assets/svg/5.svg" alt="To top" />
        </a>
        <div className="div--footer">
          <app-footer></app-footer>
        </div>
        </section>
        </>
  );
}

export default Home;
