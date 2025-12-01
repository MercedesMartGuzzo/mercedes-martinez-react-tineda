import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { CartContext } from '../Cart/CartContext';

export const Nav = () => {

    const { totalItems } = useContext(CartContext);

    return (
        <div className='wrapp-nav'>
            <nav className="navbar">
                <ul>
                    <Link to="/"><h2>Tu Jardín</h2></Link>
                </ul>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/suculentas">Suculentas</Link></li>
                    <li><Link to="/category/varios">Varias</Link></li>
                    <li>
                        {<Link to="/cart" className="cart-link">
                            <i className="bi bi-cart"></i>
                            {totalItems > 0 && (
                                <span className="count-number">{totalItems}</span>
                            )}
                        </Link>}
                    </li>
                </ul>
            </nav>
        </div>
    );
};
