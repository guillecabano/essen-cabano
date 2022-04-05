import ItemCount from './ItemCount';
import './styles/ItemListContainer.css'


const ItemListContainer = ({greeting}) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
            <div class='wrapper'>{greeting}</div>
            <ItemCount stock={4} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;