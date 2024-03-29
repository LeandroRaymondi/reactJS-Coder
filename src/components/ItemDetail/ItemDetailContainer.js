import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../utils/products';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';




const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
       getProduct(id)
        .then((data) => {
            setProduct(data)
        })
        .catch(err => console.waen(err));
    }, [id]);

    return (
        <>
            <Container>
                <h3 className='detailTitle'>Detalles del Producto</h3>
                {product &&<ItemDetail product={product}/>}
            </Container>
        </>
    );
}

export default ItemDetailContainer;