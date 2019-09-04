import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Contato = ({ en }) => (
  <Container fluid style={{ marginTop: 20, padding: 20 }}>
    <h1>{en ? 'Contact' : 'Contato'}</h1>
    <Card />

    <Row style={{ padding: '5%' }}>
      <Col>
        <Image fluid src={require('../imagens/imagemUnifeiContato.jpg')} />
      </Col>
      {en ? (
        <Col>
          <h3>Contact Details</h3>
          <p>
            1303 BPS Avenue, Pinheirinho, Itajuba, Minas Gerais, Brazil
            37500-903
          </p>
          <p>
            IESTI-Instituto de Engenharia de Sistemas e Tecnologia da Informação
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            <abbr title="Phone"> Phone</abbr>: (+55)(35) 3629-1101
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <abbr title="Email"> Email: </abbr>
            <a href="mailto:name@example.com"> spadoti@unifei.edu.br</a>
          </p>

          <p>
            <a
              href="https://goo.gl/maps/gjghdquYRH62"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </p>
        </Col>
      ) : (
        <Col>
          <h3>Detalhes do Contato</h3>
          <p>Av. BPS, 1303 - Pinheirinho, Itajubá - MG, 37500-903</p>
          <p>
            IESTI-Instituto de Engenharia de Sistemas e Tecnologia da Informação
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            <abbr title="Phone"> Telefone</abbr>: (+55)(35) 3629-1101
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <abbr title="Email"> Email: </abbr>
            <a href="mailto:name@example.com">spadoti@unifei.edu.br</a>
          </p>

          <p>
            <a
              href="https://goo.gl/maps/gjghdquYRH62"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </p>
        </Col>
      )}
    </Row>
  </Container>
);

export default Contato;
