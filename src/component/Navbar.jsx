/* import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to='/' className="icon">
                Front Test
            </Link>
            <ul>
                <CustomLink to='/about'>Sobre</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
} */

import { Link } from "react-router-dom";

import React from "react";

export default function Navbar () {
    return (
        <div>HOME

            <Link to='About'>aquiiiiiiii</Link>
        </div>
    )
}