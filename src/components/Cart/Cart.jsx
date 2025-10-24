
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';

export default function Cart() {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <section className="cart-container">
            <h1>Carrito de Compras</h1>

            {cart.length === 0 ? (
                <>
                    <p>El carrito está vacío.</p>
                    <Link to="/">
                        <button>Seguir comprando</button>
                    </Link>
                </>
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="cart-total">Total: ${total.toFixed(2)}</p>
                    <div className="cart-actions">
                        <button onClick={clearCart}>Vaciar Carrito</button>
                        <button onClick={() => alert('Compra finalizada!')}>Finalizar Compra</button>
                    </div>
                </>
            )}
        </section>
    );
}

