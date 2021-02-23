import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'

const Header = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
            <i className="fa fa-list-ul mr-2" aria-hidden="true"></i>
            Todo App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Button className='btn btn-dark nav-link text-light'>Create Todo</Button>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
