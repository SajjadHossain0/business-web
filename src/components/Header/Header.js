import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is included
import './Header.css';

function Header(args) {


    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" {...args} expand="md" fixed="top"> {/* Add the expand property */}
                <NavbarBrand className="navBrand" href="/">Logo</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav dark className="ms-auto" navbar>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/about-company">About Company</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/services">Services</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/gallery">Gallery</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/major-clints">Major Clint's</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/blogs">Blog's</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
