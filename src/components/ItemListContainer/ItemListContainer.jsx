import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';   // <-- agregado
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/products';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();  // <-- toma la categoría desde la URL

    const [selectedCategory, setSelectedCategory] = useState(categoryId || 'todos');

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    // actualizar el select cuando cambia la ruta
    useEffect(() => {
        if (categoryId) {
            setSelectedCategory(categoryId);
        } else {
            setSelectedCategory('todos');
        }
    }, [categoryId]);

    const filteredProducts =
        selectedCategory === 'todos'
            ? products
            : products.filter(p => p.category === selectedCategory);

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
    );
}
