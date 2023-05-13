import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="me-auto">
            Home
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/aboutme">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

    </>
  )
}

export default Header