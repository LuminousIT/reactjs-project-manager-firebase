import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <ul className="sidenav" id="mobile-links">
            <li><NavLink to="/" className="btn btn-floating pink lighten-1"> NN </NavLink> </li>
            <li><NavLink to="/"> New Project </NavLink> </li>
            <li><NavLink to="/"> Sign Out </NavLink> </li>   
        </ul>
        
    )
}

export default Sidebar