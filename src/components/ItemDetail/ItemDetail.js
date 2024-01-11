import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemList/Item"
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);

  const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
    addItem(product, value);
  };

  return (
    <div className='itemDetail'>
      <Item product={product} showDetailsButton={false} />

      {
        showItemCount && <ItemCount initial={1} stock={product.stock} onAdd={handleAdd} />
      }
      {
        !showItemCount && 
          <Link to='/cart' >
            <Button variant='success' className="goToCart">Ir al Carrito</Button>
          </Link>
      }
      
    </div>
  );
}
 
export default ItemDetail;