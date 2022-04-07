import Item from "./Item";
import './styles/ItemListContainer.css'

const ItemList = ({ items }) => {
    return (
        <div class="container-fluid bg-trasparent my-4 p-3">
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
            </div>
        </div>
    );
}

export default ItemList;