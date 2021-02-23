import React from 'react';
import { Container, Card } from 'react-bootstrap';
import pubs from './publicacoes.json';

const Publicacoes = ({ en }) => {
  const printLi = (r) => (
    <li style={{ marginBottom: 15, textAlign: 'justify' }}>{r}</li>
  );

  const getPubs = () => {
    const retVar = [];
    for (const key in pubs) {
      if (key !== 'Livros') {
        retVar.push(
          <>
            <h2 style={{ marginTop: 40 }}>{key}</h2>
            <Card style={{ marginBottom: 20 }} />
            <Card>
              <Card.Body>
                <h4> {en ? 'Journals' : 'Revistas'} </h4>
                <ul>{pubs[key].revistas.map(printLi)}</ul>
                <h4> {en ? 'Congresses' : 'Congressos'} </h4>
                <ul>{pubs[key].congressos.map(printLi)}</ul>
              </Card.Body>
            </Card>
          </>
        );
      }
    }
    return retVar;
  };

  return (
    <Container fluid style={{ marginTop: 20, padding: 20 }}>
      <h2>{en ? 'Publications' : 'Publicações'}</h2>
      <Card />
      <h2 style={{ marginTop: 40 }}>{en ? 'Books' : 'Livros'}</h2>
      <Card style={{ marginBottom: 20 }} />
      <Card>
        <Card.Body>
          <ul>
            {pubs.Livros.map((l) => (
              <li style={{ marginBottom: 15, textAlign: 'justify' }}>{l}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
      {getPubs()
        .reverse()
        .map((p) => p)}
    </Container>
  );
};

export default Publicacoes;
