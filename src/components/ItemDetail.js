import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './styles/ItemDetail.css'


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " Productos.");
        setItemCount(qty);
        console.log(item)
        test.addToCart(item, qty)
    }

    return (
        <>
        {
            item && item.image
            ? 
            <div className="detailContainer">
                <div className="wrapperDetail">
                    <div className="imgContainer">
                        <img className="imageDetail" src={item.image} alt="Imagen del producto" />
                    </div>
                    <div className="infoContainer">
                        <div className="title">{item.name}</div>
                        <div className="desc">{item.description}</div>
                        <div className="price">$ {item.cost}</div>
                        <div className="desc">{item.stock} unidades en stock</div>
                    
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><div className="btn btn-warning">Ir al Carro</div></Link>
                    }
                    </div>
                </div>

            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;