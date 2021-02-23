import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Link to='/' className='navbar-brand'>
            <i className="fa fa-list-ul mr-2" aria-hidden="true"></i>
            Todo App
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to='/edit/todo' className='btn btn-dark nav-link text-light'>Create Todo</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
