import ItemCount from './ItemCount';
import './styles/ItemDetail.css'

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item.image
            ? 
            <div class="detailContainer">
                <div class="wrapperDetail">
                    <div class="imgContainer">
                        <img class="imageDetail" src={item.image} />
                    </div>
                    <div class="infoContainer">
                        <div class="title">{item.name}</div>
                        <div class="desc">{item.description}</div>
                        <div class="price">$ {item.cost}</div>
                        <div class="desc">{item.stock} unidades en stock</div>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </div>
                    
                </div>

            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;