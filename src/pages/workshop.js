import React from "react";
import { Container, Card, Image, Row, Col, Button } from "react-bootstrap";
import Iframe from "react-iframe";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const Shake = styled.div`
  animation: 1s ${keyframes`${pulse}`} infinite;
`;

class Workshop extends React.Component {
  render() {
    return (
      <Container fluid style={{ marginTop: 20, padding: 20, width: "90%" }}>
        <h1>Workshop</h1>
        <Card style={{ marginBottom: 30 }} />
        <Row>
          <Col style={{ textAlign: "left", marginTop: 20, marginBottom: 30 }}>
            <Shake>
              <Button
                style={{ fontSize: 50, fontFamily: "verdana" }}
                size="lg"
                block
                variant="danger"
                href="https://docs.google.com/forms/d/e/1FAIpQLSccPU2mhvXc_MRS0gCopEJxmjhZbyHrofaHMCgIejSwrADqRw/viewform?usp=sf_link"
              >
                Inscreva-se!
              </Button>
            </Shake>
          </Col>
        </Row>
        <Row>
          <Col sm="4" style={{ textAlign: "right" }}>
            <Image
              src={require("../imagens/LAIoT/handson.jpg")}
              style={{ width: "100%" }}
            />
          </Col>
          <Col sm="4" style={{ textAlign: "center" }}>
            <Image
              src={require("../imagens/LAIoT/pint.jpg")}
              style={{ width: "100%" }}
            />
          </Col>
          <Col sm="4" style={{ textAlign: "left" }}>
            <Image
              src={require("../imagens/LAIoT/sexta.jpg")}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>

        <Row>
          <Col sm="10">
            <h2>Dashboard</h2>
            <Card style={{ marginBottom: 30 }} />
            <Iframe
              url="https://admin.tago.io/public/dashboard/5d6d1a0eca5003001b180a54/cb4092f0-a1f2-47e1-a329-e1ae13bf4b23"
              height="650px"
              scrolling="no"
              width="100%"
            />
          </Col>
          <Col sm="2">
            <h2>Mapa</h2>
            <Card style={{ marginBottom: 30 }} />
            <Image
              src={require("../imagens/LAIoT/mapa.png")}
              style={{ width: "100%" }}
            />
            <p>
              Para maiores informações um mapa completo pode da Unifei pode ser
              conferido no link{" "}
              <a href="https://unifei.edu.br/wp-content/uploads/2018/02/Mapa-do-Campus_alta.png">
                Mapa da Unifei
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <p> Apoio: </p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Image
              src={require("../imagens/apoio/logo_onerf.png")}
              height="150"
            />
          </Col>
          <Col>
            <Image src={require("../imagens/apoio/logo_ie.jpg")} height="150" />
          </Col>
          <Col>
            <Image
              src={require("../imagens/apoio/logo_inatel.png")}
              height="150"
            />
          </Col>
          <Col>
            <Image
              src={require("../imagens/apoio/logo_advantech.png")}
              height="150"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Workshop;
