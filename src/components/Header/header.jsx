import React from 'react'
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

const Header = () => {

    const menuData = [
        { "name": "HOME", "url": "/" },
        { "name": "PAGES", "url": "/pages" },
        { "name": "TRAVEL", "url": "/travel" },
        { "name": "BLOG", "url": "/blog" },
        { "name": "SHOP", "url": "/shop" },

    ]

    return (
        <header>
           
            <Navbar expand="lg" className="navbar bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='brand'>LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-2">
                            {
                                menuData.map((item) => (
                                    <NavLink to={item.url} key={item.name}>
                                        <div className="list_item">
                                            {item.name}
                                        </div>
                                    </NavLink>

                                ))
                            }
                        </Nav>
                        <Nav className='ms-auto d-flex gap-2'>
                            <button className="btn btn-success">SIGN UP</button>
                            <button className="btn btn-success">LOG IN</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header