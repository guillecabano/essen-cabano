import ItemList from './ItemList';
import './styles/ItemListContainer.css'
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products } = require('../utils/products');



const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    useEffect(() => {
        customFetch(400, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.category.id === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [datos]);


    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);


    return (
        <ItemList items={datos} />
);
}

export default ItemListContainer;