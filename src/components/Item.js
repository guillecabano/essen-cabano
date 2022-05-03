import './styles/Item.css'
import { Link } from 'react-router-dom';


const Item = ({ title, stock, price, pictureUrl, id, }) => {
    return (
        
                <div className="card h-100 shadow-sm"> <img src={pictureUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">Precio</span> <span className="float-end price-hp">$ {price}</span> </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Stock: {stock}</p>
                    <Link to={`/item/${id}`}>
                    <div className="text-center my-4"> <a href="/#" className="btn btn-warning">Ver detalles</a> </div>
                    </Link>
                </div>
            </div>
        
    );
}

export default Item;