import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbarr = () => {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <Link to="/">
            <h1>HOME</h1>   
            </Link>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  };
  
  export default Navbarr;