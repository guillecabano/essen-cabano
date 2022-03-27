//Componente que crea un navbar
import React, {Component} from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/logo.png";
import './styles/NavBar.css'

class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <img src={logo} alt="logo" className="logo" />   
                    <a><span class="fw-bold h1 text-white mx-3">Essen</span></a>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <a className="nav-link" href="#">Cacerolas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Sartenes</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Accesorios</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;