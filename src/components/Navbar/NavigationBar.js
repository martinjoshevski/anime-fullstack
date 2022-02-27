import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavigationBar() {
  // Collapse isOpen State

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#FF3939",
          fontWeight: 500,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 5,
        }}
        expand="md"
        light
      >
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto text-light" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem></NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink
            className="text-dark"
            target="__Blank"
            href="https://github.com/martinjoshevski"
          >
            GitHub
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
