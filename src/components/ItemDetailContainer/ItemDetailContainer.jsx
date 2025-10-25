import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data/products.json`)

            .then(res => res.json())
            .then(data => {
                const found = data.find(item => item.id === Number(id));
                setProduct(found);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <p>Cargando producto...</p>;

    return (
        <section className="item-detail-container">
            <ItemDetail {...product} />
        </section>
    );
}
