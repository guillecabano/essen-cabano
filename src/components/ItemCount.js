import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import './styles/ItemCount.css';

//Se crea la funcion contenedora para contar los productos
const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div className='ProductAmountContainer'>
            <Button variant="text" onClick={increment}><Add /></Button>
            <div className='ProductAmount'>{count}</div>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            {
                stock && count
                ? <Button variant="outlined" onClick={() => onAdd(count)}>Agregar al Carro</Button>
                : <Button variant="contained" disabled>Agregar al Carro</Button>
            }
            
        </div>
    );
}

export default ItemCount;