import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <Navbar
          className="navBackground d-flex justify-content-center navText "
          dark
          expand="md"
        >
          <Nav navbar>
            <NavItem className="navSpaced">
              <NavLink className="nav-link" to="/beer">
                BeerMe
              </NavLink>
            </NavItem>
            <NavItem className="navSpaced">
              <NavLink className="nav-link" to="/home">
                Learn
              </NavLink>
            </NavItem>{" "}
            <NavItem className="navSpaced">
              <NavLink className="nav-link" to="/locator">
                Beer Locator
              </NavLink>
            </NavItem>{" "}
            <NavItem className="navSpaced">
              <NavLink className="nav-link" to="/home">
                Shop
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
