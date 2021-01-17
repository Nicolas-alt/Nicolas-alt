import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../routes/Routes'

import '../assets/sass/WrapperNav.scss'

const WrapperNav = _ => {
    return (
        <section className="section--principal">
            <header className="header--menu">
                <nav>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/experience">exp</Link></li>
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
