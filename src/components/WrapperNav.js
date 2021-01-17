import React from 'react'
import { NavLink } from 'react-router-dom'
import Routes from '../routes/Routes'

import '../assets/sass/WrapperNav.scss'

const WrapperNav = _ => {
    return (
        <section className="section--principal">
            <header className="header--menu">
                <nav>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="red" to="/"> 
                                <i className='bx bx-home-alt' ></i>                    
                                <span className="span--nav">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="red" to="/about">
                                <i className='bx bx-info-circle' ></i>                                
                                <span className="span--nav">About</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  exact activeClassName="red" to="/experience">
                                <i className='bx bx-briefcase-alt-2'></i>
                                <span className="span--nav">Experience</span> 
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="div--router">
              <Routes />
            </div>
        </section>
    )
}

export default WrapperNav
