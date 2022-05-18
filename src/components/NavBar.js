//Componente que crea un navbar
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/logo.png";
import "./styles/NavBar.css";
import CartWidget from "./CartWidget";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link id="RouterNavLink" to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                
                <Link id="RouterNavLink" to="/" style={{textDecoration: "none"}}><span className="fw-bold h1 text-white mx-3">Essen</span></Link>
                
                
                <div className="container-fluid">
                    <div
                        className="collapse navbar-collapse justify-content-around"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav menu">
                            <Link to='/category/Cacerolas'>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Cacerolas
                                    </div>
                                </li>
                            </Link>
                            <Link to='/category/Sartenes'>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Sartenes
                                    </div>
                                </li>
                            </Link>
                            <Link to='/category/Accesorios'>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Accesorios
                                    </div>
                                </li>
                            </Link>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item AddToCart">
                                <div className="nav-link">
                                <Link to='/cart' style={{textDecoration: "none", color: "white"}}>  
                                    <CartWidget />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
