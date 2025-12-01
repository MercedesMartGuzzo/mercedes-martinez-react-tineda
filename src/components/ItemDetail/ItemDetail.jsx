import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import { Count } from '../Count/Count';


export default function ItemDetail({ id, name, price, description, image, stock, category }) {
    const navigate = useNavigate();
    const { addItem } = useContext(CartContext);

    const handleBuy = () => {
        addItem({ id, name, price, image }, 1);
        navigate('/cart');
    };

    return (
        <article className="item-detail-card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
            <p>Categoría: {category}</p>

            <Count
                btnText="Agregar al carrito"
                onConfirm={(quantity) =>
                    addItem({ id, name, price, image }, quantity)
                }
            />

         {/*    <button onClick={handleBuy}>Comprar</button> */}
        </article>
    );
}
