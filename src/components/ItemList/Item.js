import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product, showDetailsButton }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImage' variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    $ {product.price}
                </Card.Text>
                <Card.Text>
                    {product.description}
                </Card.Text>
                {showDetailsButton && 
                    <Link to={`/item/${product.id}`}>
                        <Button variant="primary">
                            Ver detalle
                        </Button>
                    </Link>
                }
            </Card.Body>
        </Card>
    );
}

export default Item;