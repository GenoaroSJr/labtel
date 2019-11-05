import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//import Link from 'react-router-dom/Link'
const Link = require("react-router-dom").Link;

const MyNav = ({ func, en }) => (
  <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg">
    <Navbar.Brand as={Link} to="/">
      {en ? "Home" : "Inicio"}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/equipe">
          {en ? "Team" : "Equipe"}
        </Nav.Link>
        <Nav.Link as={Link} to="/pesquisa">
          {en ? "Research Lines" : "Linhas de Pesquisa"}
        </Nav.Link>
        <Nav.Link as={Link} to="/publicacoes">
          {en ? "Publications" : "Publicações"}
        </Nav.Link>
        <Nav.Link as={Link} to="/teses">
          {en ? "Theses and Dissertations" : "Teses e Dissertações"}
        </Nav.Link>
        <Nav.Link href="/fotos">
          {en ? "Photo Gallery" : "Galeria de Fotos"}
        </Nav.Link>
        <Nav.Link as={Link} to="/contato">
          {en ? "Contact" : "Contato"}
        </Nav.Link>
      </Nav>
      <img
        onClick={func}
        alt="bandeira"
        src={
          en
            ? require("../imagens/bandeira_BRASIL.png")
            : require("../imagens/bandeira_EUA.png")
        }
        style={{ cursor: "pointer" }}
      />
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;
