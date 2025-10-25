import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
export const Nav = () => {
    return (
        <div className=" wrapp-nav">
            <nav className='navbar'>  
                <ul> 
                    <Link to={"/"}><h2>Tu Jardín</h2>
                    </Link>
                </ul>
                <ul>
                    <li><Link to={"/"}>Home</Link>
                    </li>
                    <li><Link to={"/category/suculentas"}>Suculentas</Link>
                    </li>
                    <li><Link to={"/category/varias"}>Varias</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
