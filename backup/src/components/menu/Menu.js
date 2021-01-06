import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Menu.css';

function Menu() {
    return (
        <div className="container-fluid">
            <Navbar collapseOnSelect expand="lg" bg="light" className="container">
                <Navbar.Brand href="/home">
                    <img src="/covLogo.png" height="55" alt="CovGuinée"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span className="line"></span> 
                    <span className="line"></span> 
                    <span className="line"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" className="spacer"> Comment ça marche?</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cov_user"> Rechercher </Nav.Link>
                        <Nav.Link href="/register">Inscription</Nav.Link>
                        <Nav.Link href="/signin">Connexion</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
      );
}

export default Menu;
