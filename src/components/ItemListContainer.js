import { Button } from '@material-ui/core';

const ItemListContainer =({greeting}) => {
    return (
        <Button variant="contained" color="primary">{greeting}</Button>
    )
}

export default ItemListContainer;