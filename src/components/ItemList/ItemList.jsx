import React from 'react';
import { Item } from '../Item/Item';

export default function ItemList({ list }) {
    return (
        <>
            {list.length ? (
                list.map((prod) => (
                    <Item key={prod.id} {...prod} />
                ))
            ) : (
                <p>No hay productos...</p>
            )}
        </>
    );
}
