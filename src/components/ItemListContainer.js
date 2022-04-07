import ItemCount from './ItemCount';
import ItemList from './ItemList';
import './styles/ItemListContainer.css'
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');


const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    return (
        <>
            <div class='wrapper'>{greeting}</div>
            <ItemList items={datos} />
            <ItemCount stock={4} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;