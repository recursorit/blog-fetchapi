import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const Top = () => {
    return (
        <div >
            <Navbar bg="dark" variant='dark' className='fixed-top '>
                <Navbar.Brand href="" > <img src='./logo.svg' style={{height:'60px'}}/>
                </Navbar.Brand>
                <span className='logostyle' >RECURSORIT</span>

                <Nav className="ml-auto navlink">
                    <Nav.Link href="" className='px-3 '>Home</Nav.Link>
                    <Nav.Link href="" className='px-3'>About Us</Nav.Link>
                    <Nav.Link href="" className='px-3'>Contact Us</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Top
