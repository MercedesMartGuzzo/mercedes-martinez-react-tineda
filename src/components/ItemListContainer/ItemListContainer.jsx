import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('todos')

    useEffect(() => {
        fetch('/data/products.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('No se pueden cargar los productos')
                }
                return res.json()
            })
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])

    const filteredProducts =
        selectedCategory === 'todos'
            ? products
            : products.filter(p => p.category === selectedCategory)

    return (
        <section className="itemlist-container">
            <h1>Bienvenidos a Tu Jardín</h1>

            <div className="filter-bar">
                <label htmlFor="category">Filtrar por categoría:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="todos">Todos</option>
                    <option value="suculentas">Suculentas</option>
                    <option value="varios">Varios</option>
                </select>
            </div>

            <div className="product-grid">
                <ItemList list={filteredProducts} />
            </div>
        </section>
    )
}
