import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
} from "reactstrap";

function NavbarComponent(args) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/" className="l">
          PharmBook
        </NavbarBrand>

        <div className="row mx-0"></div>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about-us");
                }}
              >
                About us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact-Us");
                }}
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
