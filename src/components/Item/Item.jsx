import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ({ id, name, price, description, image, stock, category }) => {
    return (
        <div className='wrapp-item'>
            <article className='product-card'>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>${price}</p>
                <p>Stock: {stock}</p>
                <p>Categoría: {category}</p>
                <Link to={`/detail/${id}`}>
                    <button>Ver detalle</button>
                </Link>
            </article>
        </div>
    );
};
