import React from "react";
import { Container, Card, Image, Row, Col, Button } from "react-bootstrap";
import Iframe from "react-iframe";

class Workshop extends React.Component {
  render() {
    return (
      <Container fluid style={{ marginTop: 20, padding: 20, width: "80%" }}>
        <h1>Workshop</h1>
        <Card style={{ marginBottom: 30 }} />

        <Row>
          <Col style={{ textAlign: "right" }}>
            <Image
              src={require("../imagens/LAIoT/handson.png")}
              style={{ width: "100%" }}
            />
          </Col>

          <Col style={{ textAlign: "left" }}>
            <Image
              src={require("../imagens/LAIoT/programa1.png")}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>

        <Row>
          <Col style={{ textAlign: "left", marginTop: 20, marginBottom: 30 }}>
            <Button
              style={{ fontSize: 50 }}
              variant="primary"
              size="lg"
              block
              href="https://docs.google.com/forms/d/e/1FAIpQLSccPU2mhvXc_MRS0gCopEJxmjhZbyHrofaHMCgIejSwrADqRw/viewform?usp=sf_link"
            >
              Inscreva-se!
            </Button>
          </Col>
        </Row>

        <Row>
          <Col style={{ textAlign: "center" }}>
            <Image
              src={require("../imagens/LAIoT/mapa.png")}
              style={{ width: "30%" }}
            />
          </Col>
        </Row>

        <Row>
          <Col style={{ textAlign: "center" }}>
            <p>
              Para maiores informações um mapa completo pode da Unifei pode ser
              conferido no link{" "}
              <a href="https://unifei.edu.br/wp-content/uploads/2018/02/Mapa-do-Campus_alta.png">
                Mapa da Unifei
              </a>
            </p>
          </Col>
        </Row>

        <h2>Dashboard</h2>
        <Card style={{ marginBottom: 30 }} />
        <Row>
          <Col>
            <Iframe
              url="https://admin.tago.io/public/dashboard/5d6d1a0eca5003001b180a54/cb4092f0-a1f2-47e1-a329-e1ae13bf4b23"
              height="650px"
              scrolling="no"
              width="100%"
            />
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
