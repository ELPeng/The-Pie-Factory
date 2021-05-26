import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/The Pie Factory Icon Elements/SVG/Pie.svg';

function Nav(){
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    return(
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/products'>
                    <li>Products</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About Us</li>
                </Link>
                <Link to='/'>
                    <img src={logo} width={200}/>
                </Link>
                <Link style={navStyle} to='/gallery'>
                    <li>Gallery</li>
                </Link>
                <Link style={navStyle} to='/orders'>
                    <li>Orders</li>
                </Link>
            </ul>

        </nav>
    )
}


export default Nav