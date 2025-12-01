import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getProductById } from '../../services/products';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <p>Cargando producto...</p>;

    return (
        <section className="item-detail-container">
            <ItemDetail {...product} />
        </section>
    );
}
