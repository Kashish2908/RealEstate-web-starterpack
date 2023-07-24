import React from "react";
import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
// import "../../../index"

const Header = () => {
  const menuData = [
    { name: "HOME", url: "/" },
    { name: "PAGES", url: "/pages" },
    { name: "TRAVEL", url: "/travel" },
    { name: "BLOG", url: "/blog" },
    { name: "SHOP", url: "/shop" },
  ];
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

  return (
    <header>
      <div id="navbar">
      <Navbar expand="lg" className="navbar bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="#home" className="brand">
            <p>ankit</p>
          </Navbar.Brand> */}
          <p>Logo</p>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-2 hello">
              {menuData.map((item) => (
                <NavLink to={item.url} key={item.name}>
                  <div className="list_item">{item.name}</div>
                </NavLink>
              ))}
            </Nav>
            <Nav className="ms-auto d-flex gap-2">
              <button className="btn">SIGN UP</button>
              <button className="btn">LOG IN</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      <Navbar expand="lg" className="navbar bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-2 hello1">
              {menuData.map((item) => (
                <NavLink to={item.url} key={item.name}>
                  <div className="list_item">{item.name}</div>
                </NavLink>
              ))}
            </Nav>
            <Nav className="ms-auto d-flex gap-2">
              <button className="btn ">SIGN UP</button>
              <button className="btn ">LOG IN</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
