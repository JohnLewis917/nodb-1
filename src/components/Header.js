import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div>
            <header className="header">
                <h1 className="title">Team Builder</h1>
            <nav className="links">
                <Link className="ind" to="/">Home</Link>
                <Link className="ind" to="/team">Team</Link>
                <Link  to="/playerinfo">Team Builder</Link>
            </nav>

            </header>
        </div>
    )
}

export default Header 
