import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
//import Link from 'react-router-dom/Link'
const Link = require("react-router-dom").Link;

const MyNav = ({ func, en, visited, setVisited }) => {
  const [vis, setVis] = useState(0);

  useEffect(() => {
    const create =
      "https://api.countapi.xyz/create?namespace=labtel.unifei.edu.br&key=visitors&value=0";
    const get = "https://api.countapi.xyz/get/labtel.unifei.edu.br/visitors";
    const increment =
      "https://api.countapi.xyz/update/labtel.unifei.edu.br/visitors?amount=1";
    async function load(ref) {
      let val = 0;
      console.log(visited);
      const g = await (await fetch(get)).json();
      if (g === null) await fetch(create);
      else val = g.value;
      if (!visited) {
        const i = await (await fetch(increment)).json();
        val = i.value;
        setVisited();
      }
      setVis(val);
      console.log(g);
    }

    load(this).catch((e) => console.log("Erro ao carregar visitantes: " + e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
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
          <Nav.Link as={Link} to="/eventos">
            {en ? "Events" : "Eventos"}
          </Nav.Link>
          <Nav.Link href="/fotos">
            {en ? "Photo Gallery" : "Galeria de Fotos"}
          </Nav.Link>
          <Nav.Link as={Link} to="/contato">
            {en ? "Contact" : "Contato"}
          </Nav.Link>
        </Nav>
        <span style={{ color: "#fff", marginRight: 40, fontSize: 12 }}>
          Visitantes: {vis}
        </span>
        <img
          onClick={func}
          alt="bandeira"
          src={
            en ? "/imagens/bandeira_BRASIL.png" : "/imagens/bandeira_EUA.png"
          }
          style={{ cursor: "pointer" }}
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
