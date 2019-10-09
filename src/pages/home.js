import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUniversity,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const Shake = styled.div`
  animation: 1s ${keyframes`${pulse}`} infinite;
`;

class Home extends React.Component {
  state = {};
  render() {
    const { en } = this.props;
    if (this.state.redirect !== undefined)
      return <Redirect to={this.state.redirect} />;
    return (
      <Container fluid style={{ padding: 0, width: "90%" }}>
        <div style={{ textAlign: "center" }}>
          {en ? (
            <h1>Telecommunication Team</h1>
          ) : (
            <h1>Grupo de Telecomunicações</h1>
          )}

          <Card style={{ marginBottom: 15 }} />
        </div>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Shake>
              <Button
                variant="danger"
                block
                style={{
                  width: "100%",
                  fontSize: 40,
                  marginBottom: 10,
                  fontFamily: "verdanaya"
                }}
                onClick={() => {
                  this.setState({ redirect: "workshop" });
                }}
              >
                Venha participar no nosso Workshop!
              </Button>
            </Shake>
          </Col>
        </Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_1.jpg")}
              alt="1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_2.jpg")}
              alt="2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_3.jpg")}
              alt="3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_4.jpg")}
              alt="4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_5.jpg")}
              alt="5"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_6.jpg")}
              alt="6"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_7.jpg")}
              alt="7"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../imagens/carrousel/carrousel_8.jpg")}
              alt="8"
            />
          </Carousel.Item>
        </Carousel>

        <Container fluid style={{ marginTop: 20, padding: 20 }}>
          <Row style={{ marginBottom: 20 }}>
            <Col>
              <Card style={{ marginTop: 20 }}>
                <Card.Header>
                  <FontAwesomeIcon icon={faCog} />
                  {" Venha conhecer nosso workshop!"}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    O <b>II Workshop Labtel</b> realizado pelo Laboratório de
                    Telecomunicações da UNIFEI, tem como objetivo aproximar
                    acadêmia e potenciais parceiros de diferentes ramos da
                    indústria de tecnologia e inovação. O encontro será
                    realizado nos dias <b>17 e 18 de outubro de 2019 </b> no
                    prédio QMAP, localizado no campus da Unifei, em Itajubá. Na
                    ocasião, estudantes, pesquisadores e desenvolvedores terão o
                    espaço para apresentar seus trabalhos, propostas de projetos
                    e resultados, de modo que se possam estabelecer novas redes
                    de contato e possíveis parceirias entre todos os envolvidos.
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.setState({ redirect: "workshop" });
                    }}
                  >
                    {en ? "Get more info" : "Saiba Mais"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card>
                <Card.Header as="h4">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  {en ? " Who we are!" : " Quem somos!"}
                </Card.Header>
                <Card.Body style={{ padding: "5mm" }}>
                  <Card.Text>
                    {en ? (
                      <>
                        The UNIFEI telecommunication team is focused on basic
                        research in the electromagnetism and propagation of
                        electromagnetic waves area. In this immense field of
                        research in electromagnetism, we are directly interested
                        in three areas: optics and photonics, radio frequency
                        (RF) and wave propagation and antennas.
                      </>
                    ) : (
                      <>
                        O grupo de telecomunicações da UNIFEI está voltado para
                        pesquisa básica na área de eletromagnetismo e propagação
                        de ondas eletromagnéticas. Neste vasto campo de
                        pesquisas em eletromagnetismo, estamos diretamente
                        interessados em três áreas: óptica e fotônica,
                        rádio-frequência (RF), propagação de ondas e antenas.
                      </>
                    )}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.setState({ redirect: "equipe" });
                    }}
                  >
                    {en ? "Get more info" : "Saiba Mais"}
                  </Button>
                  <div>
                    <img
                      src={require("../imagens/imagem_RFID.jpg")}
                      alt="RFID"
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                    />
                    <img
                      src={require("../imagens/imagem_osa2.jpg")}
                      alt="OSA"
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header as="h4">
                  <FontAwesomeIcon icon={faUniversity} />
                  {en ? " What we do!" : " O que fazemos!"}
                </Card.Header>
                <Card.Body style={{ padding: "5mm" }}>
                  {en ? (
                    <>
                      <Card.Text>
                        In the area of <b>optics and photonics</b>, we are at
                        the science frontier when developing new devices, on
                        nanometric scales, in silicon technology, called
                        Integrated Optics (Silicon Photonics). This concept of
                        nanophotonics allows to miniaturize network components,
                        reaching high data trasmission rates. Furthermore, the
                        team's work is directed to the Optical Transformation
                        (OT) research line, which allows to get new structures
                        and devices, such as perfect lenses and the cloack of
                        invisibility.{" "}
                      </Card.Text>
                      <Card.Text>
                        In the <b>Radio frequency</b> research line, we are
                        working on the development of RF chipless sensors and
                        also in application of Radio Frequency IDentification
                        (RFID) in IoT (Internet of Things). The team relies on
                        professionally certified researches to work with RFID
                        systems within GS1 EPCglobal standards.
                      </Card.Text>
                      <Card.Text>
                        Finally, in our third pillar of{" "}
                        <b>waves and antennas propagation</b>, we develop
                        scientific researchs for the new fifth generation
                        cellphone networks (5G), looking for strong innovation
                        when integrating optical control in antenna
                        arrangements. More over, we can connect the
                        nanophotonics and RF research lines when integrating
                        concepts of: propagation, radar, optics and antennas.
                        More details about our research line can be found in the
                        team's publications, as well as by our contact.
                      </Card.Text>
                    </>
                  ) : (
                    <>
                      <Card.Text>
                        Na área de <b>óptica e fotônica</b>, estamos na
                        fronteira da ciência ao desenvolver novos dispositivos,
                        em escalas nanométricas, em tecnologia do silício,
                        chamada de Óptica Integrada (Silicon Photonics). Este
                        conceito de nanofotônica permite miniaturizar
                        componentes da rede, alcançando altas taxas de
                        transmissão de dados. Ademais, o trabalho do grupo está
                        direcionado para a linha de Transformada Óptica (TO) a
                        qual permite obter novas estruturas e dispositivos,
                        como, por exemplo, lentes perfeitas e o manto de
                        invisibilidade.
                      </Card.Text>
                      <Card.Text>
                        Na linha de <b>Radiofrequência</b> estamos trabalhando
                        no desenvolvimento de sensores RF sem chip e, também, na
                        IDentificação por Rádio Frequencia (RFID) para aplicação
                        em IoT (Internet das coisas). A equipe conta com
                        pesquisadores com certificação profissional para
                        trabalhar com sistemas RFID dentro dos padrões GS1
                        EPCglobal.
                      </Card.Text>
                      <Card.Text>
                        Por fim, no nosso terceiro pilar de
                        <b> propagação de ondas e antenas</b>, desenvolvemos
                        pesquisa para as novas redes celulares de quinta geração
                        (5G), buscando forte inovação ao integrar controle
                        óptico em arranjos de antenas. Ademais, podemos
                        relacionar as linhas de nanofotônica e RF, ao integrar
                        conceitos de: propagação, radar, óptica e antenas. Mais
                        detalhes sobre nossa linha de interesse pode ser
                        encontrada nas publicações do grupo, assim como, por
                        nosso contato.
                      </Card.Text>
                    </>
                  )}
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.setState({ redirect: "pesquisa" });
                    }}
                  >
                    {en ? "Get more info" : "Saiba Mais"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
