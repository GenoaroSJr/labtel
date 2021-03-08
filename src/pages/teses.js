import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ths from './teses.json';

const Teses = ({ en }) => (
  <Container fluid style={{ marginTop: 20, padding: 20 }}>
    <h1>{en ? 'Theses and Dissertations' : 'Teses e Dissertações'}</h1>
    <Card />
    <h2 style={{ marginTop: 40 }}>{en ? 'In Progress' : 'Em andamento'}</h2>
    <Card style={{ marginBottom: 20 }} />
    <Card>
      <Card.Body>
        <h4> {en ? 'Theses' : 'Teses'} </h4>
        <ul>
          {ths.em_andamento.teses.map((t) => (
            <li style={{ marginBottom: 15, textAlign: 'justify' }}>{t}</li>
          ))}
        </ul>

        <h4> {en ? 'Dissertations' : 'Dissertações'} </h4>
        <ul>
          {ths.em_andamento.dissertacoes.map((t) => (
            <li style={{ marginBottom: 15, textAlign: 'justify' }}>{t}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>

    <h2 style={{ marginTop: 40 }}>{en ? 'Finished' : 'Finalizadas'}</h2>
    <Card style={{ marginBottom: 20 }} />
    <Card>
      <Card.Body>
        <h4> {en ? 'Theses' : 'Teses'} </h4>
        <ul>
          {ths.finalizadas.teses.map((t) => (
            <li style={{ marginBottom: 15, textAlign: 'justify' }}>{t}</li>
          ))}
        </ul>

        <h4> {en ? 'Dissertations' : 'Dissertações'} </h4>
        <ul>
          {ths.finalizadas.dissertacoes.map((t) => (
            <li style={{ marginBottom: 15, textAlign: 'justify' }}>{t}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  </Container>
);

export default Teses;
