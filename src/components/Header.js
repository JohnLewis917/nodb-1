import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div>
            <header className="header">
                <h1>Team Builder</h1>
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/playerinfo">Team Builder</Link>
            </nav>

        </div>
    )
}

export default Header 
