import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import Membro from '../components/membro';

import {
  Antigos,
  Doutorando,
  Graduando,
  Mestrando,
  Posdoc,
  Professores
} from '../membros';

const Equipe = ({ en }) => (
  <Container fluid style={{ marginTop: 20, padding: 20 }}>
    <h2 style={{ marginTop: 15 }}>
      {en ? 'Research Team' : 'Equipe de Pesquisadores'}
    </h2>
    <Card style={{ marginBottom: 20 }} />

    <Row style={{ width: '60%' }}>
      <Col md={8} align='center'>
        <Image fluid src='/imagens/imagemGrupo2.jpg' />
      </Col>
      <Col>
        <ListGroup variant='flush'>
          <ListGroup.Item action href='#professores'>
            Professores
          </ListGroup.Item>

          <ListGroup.Item action href='#posDoutorado'>
            Pós-Doutorado
          </ListGroup.Item>

          <ListGroup.Item action href='#doutourando'>
            Doutorando
          </ListGroup.Item>

          <ListGroup.Item action href='#mestrando'>
            Mestrando
          </ListGroup.Item>

          <ListGroup.Item action href='#graduando'>
            Graduando
          </ListGroup.Item>

          <ListGroup.Item action href='#antigosMembros'>
            Membros Antigos
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>

    <div name='professores' id='professores' style={{ marginTop: 30 }}>
      <Col lg={12}>
        <h2>Professores</h2>
      </Col>
      {Professores.map((p) => (
        <Membro {...p} />
      ))}
    </div>

    <div name='posDoutorado' id='posDoutorado' style={{ marginTop: 30 }}>
      <Col lg={12}>
        <h2>Pós-Doutorado</h2>
      </Col>
      {Posdoc.map((p) => (
        <Membro {...p} />
      ))}
    </div>

    <div name='doutourando' id='doutourando' style={{ marginTop: 30 }}>
      <Col lg={12}>
        <h2>Doutorando</h2>
      </Col>
      {Doutorando.map((p) => (
        <Membro {...p} />
      ))}
    </div>

    <div name='mestrando' id='mestrando' style={{ marginTop: 30 }}>
      <Col lg={12}>
        <h2>Mestrando</h2>
      </Col>
      {Mestrando.map((p) => (
        <Membro {...p} />
      ))}
    </div>

    <div name='graduando' id='graduando' style={{ marginTop: 30 }}>
      <Col lg={12}>
        <h2>Graduando</h2>
      </Col>
      {Graduando.map((p) => (
        <Membro {...p} />
      ))}
    </div>

    <div name='antigosMembros' id='antigosMembros' style={{ marginTop: 30 }}>
      <Col lg={12}>
        <h2>Membros Antigos</h2>
      </Col>
      {Antigos.map((p) => (
        <Membro {...p} />
      ))}
    </div>
  </Container>
);

export default Equipe;
