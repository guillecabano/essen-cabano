import ItemCount from './ItemCount';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/ItemDetail.css'

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <div class="detailContainer">
                <div class="wrapperDetail">
                    <div class="imgContainer">
                        <img class="imageDetail" src={item.image} alt="Imagen del producto" />
                    </div>
                    <div class="infoContainer">
                        <div class="title">{item.name}</div>
                        <div class="desc">{item.description}</div>
                        <div class="price">$ {item.cost}</div>
                        <div class="desc">{item.stock} unidades en stock</div>
                    
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="primary">Ir al Carro</Button></Link>
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