import React, { useState } from 'react';
import { Navbar, Container, NavLink, NavDropdown, Nav, Image } from 'react-bootstrap';
import './Bar.css';
import { Link } from 'react-router-dom';
import logo_white from "./logo menu blanco.png";



function Bar() {
    const [clickColor, setClickColor] = useState("transparent");


    return (
        <>
           
            <Navbar className='Bar' fixed='top'>
         
                <Container className='inside'>

                    <Link to="/" href="home">
                        <Image className='mainLoto' src={logo_white} alt='company_logo' /></Link>

                    <Navbar.Brand href="#home" onclick="color"></Navbar.Brand>
                    <Nav className='buttonLink'>
                        <Link to="/" href='#home' >Home</Link>
                        <NavDropdown className='Drop' title="Productos" href='#products'>
                            <Link to="/scuba" href="Scuba">Scuba</Link>
                            <Link to="/hook" href="Hook">Hook</Link>
                            <Link to="/extreme" href="Extreme">Extreme</Link>
                            <Link to="/mons" href="Mons">Mons</Link>
                        </NavDropdown>
                        <Link to="/filosofia" href='Filosofia'>Filosofia</Link>
                        <Link to="/contact" href='Contact'>Contact</Link>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}
export default Bar