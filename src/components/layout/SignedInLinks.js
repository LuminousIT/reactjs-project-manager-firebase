import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        
            // <a href="#" className="sidebar-trigger" data-target="mobile-links" >
            //         <i className="material-icons"> menu</i>
            // </a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/"> New Project </NavLink> </li>
                <li><NavLink to="/"> Sign Out </NavLink> </li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1"> NN </NavLink> </li>
            </ul>
      
        
    )
}

export default SignedInLinks