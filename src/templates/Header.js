import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/sass/Header.scss'

const Header = _ => {
    return(
        <header class="Header-main">
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                </ul>
            </nav>
            <Link to="/">Nicolas</Link>
        </header>
    )
};

export default Header;
