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
            <Navbar className="navbar" {...args} expand="md"> {/* Add the expand property */}
                <NavbarBrand className="navBrand">Md. Sajjad Hossain</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav dark className="ms-auto" navbar>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">About Company</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">Services</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">Portfolio</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">Gallery</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">Major Clint's</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">Blog's</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink className="navLink" href="#">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
