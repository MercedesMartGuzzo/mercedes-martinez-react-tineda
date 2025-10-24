import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/data/products.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pueden caragar los productos');
                }
                return res.json()
            })

            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <section className="itemlist-container">
            <div>
                <h1>Bienvenidos a Tu Jardín</h1>
            </div>
            <div className="product-grid">
                <ItemList list={products} />
            </div>
        </section>
    )
}

