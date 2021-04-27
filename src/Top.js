import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const Top = () => {
    return (
        <div >
            <Navbar bg="dark" variant='dark' expand='lg' className='fixed-top '>
                <Navbar.Brand > <img src='./logo.svg' style={{ height: '60px' }} alt='logo' className='reactimg' /></Navbar.Brand>
                <span className='logostyle' >RECURSORIT</span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navlink">
                        <Nav.Link href="" className='px-3 '>Home</Nav.Link>
                        <Nav.Link href="" className='px-3'>About Us</Nav.Link>
                        <Nav.Link href="" className='px-3'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Top
