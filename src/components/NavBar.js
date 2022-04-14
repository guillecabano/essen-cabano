//Componente que crea un navbar
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/logo.png";
import "./styles/NavBar.css";
import CartWidget from "./CartWidget/CartWidget";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <a>
                <Link to="/" style={{textDecoration: "none"}}><span class="fw-bold h1 text-white mx-3">Essen</span></Link>
                </a>
                
                <div className="container-fluid">
                    <div
                        className="collapse navbar-collapse justify-content-around"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav menu">
                            <Link to='/category/1'>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Cacerolas
                                    </a>
                                </li>
                            </Link>
                            <Link to='/category/2'>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Sartenes
                                    </a>
                                </li>
                            </Link>
                            <Link to='/category/3'>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Accesorios
                                    </a>
                                </li>
                            </Link>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item AddToCart">
                                <div className="nav-link">
                                    <CartWidget />
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
