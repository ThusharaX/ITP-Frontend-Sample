import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <p style={{ color: 'blue' }}>NavBar</p>
            
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
        </div>
    )
}

export default NavBar