import './styles/Item.css'

const Item = ({ title, stock, price, pictureUrl, }) => {
    return (
        
                <div class="card h-100 shadow-sm"> <img src={pictureUrl} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">Precio</span> <span class="float-end price-hp">$ {price}</span> </div>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Stock: {stock}</p>
                    <div class="text-center my-4"> <a href="#" class="btn btn-warning">Ver detalles</a> </div>
                </div>
            </div>
        
    );
}

export default Item;