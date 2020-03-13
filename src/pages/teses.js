import React from "react";
import { Container, Card } from "react-bootstrap";

const Teses = ({ en }) => (
  <Container fluid style={{ marginTop: 20, padding: 20 }}>
    <h1>{en ? "Theses and Dissertations" : "Teses e Dissertações"}</h1>
    <Card />
    <h2 style={{ marginTop: 40 }}>{en ? "In Progress" : "Em andamento"}</h2>
    <Card style={{ marginBottom: 20 }} />
    <Card>
      <Card.Body>
        <h4> {en ? "Theses" : "Teses"} </h4>

        <ul>
          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Gabriel Lobão da Silva Fré. Projeto e desenvolvimento de um
            Mux/Demux óptico utilizando cristais fotônicos desenvolvidos via
            Transformada Óptica. Início: 2016. Tese (Doutorado em Engenharia
            Elétrica) - Universidade Federal de Itajubá, Conselho Nacional de
            Desenvolvimento Científico e Tecnológico.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Daniely Gomes Silva. Otimizaçãonumérica aplicada à transformada
            óptica para obtenção de mapeamentoquase-conforme em mantos de
            invisibilidade tri-dimensionais. Início: 2015. Tese(Doutorado em
            Engenharia Elétrica) - Universidade Federal de Itajubá,Coordenação
            de Aperfeiçoamento de Pessoal de Nível Superior.
          </li>
        </ul>

        <h4> {en ? "Dissertations" : "Dissertações"} </h4>
        <ul>
          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Denis Varise Bernardes. Otimização dos modos de operação do sistema
            de aquisição do instrumento SPARC4. Início: 2018 - Universidade
            Federal de Itajubá,Coordenação de Aperfeiçoamento de Pessoal de
            Nível Superior.
          </li>
        </ul>
      </Card.Body>
    </Card>

    <h2 style={{ marginTop: 40 }}>{en ? "Finished" : "Finalizadas"}</h2>
    <Card style={{ marginBottom: 20 }} />
    <Card>
      <Card.Body>
        <h4> {en ? "Theses" : "Teses"} </h4>
        <ul>
          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Andreia Aparecida de Castro Alves. Projeto e desenvolvimento de um
            filtro opticamente reconfigurável utilizando grafeno para aplicações
            em ondas milimétricas. Início: 2015. Tese (Doutorado em Engenharia
            Elétrica) - Universidade Federal de Itajubá, Coordenação de
            Aperfeiçoamento de Pessoal de Nível Superior.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Poliane Aires Teixeira. Desenvolvimento de sensores baseados em
            metamaterias empregando as geometrias fractais. Início: 2015. Tese
            (Doutorado em Engenharia Elétrica) - Universidade Federal de
            Itajubá, Coordenação de Aperfeiçoamento de Pessoal de Nível
            Superior.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Décio Renno. Sistema de Rastreamento e Direcionamento de Sinais para
            Sistemas 5G e IoT. Início: 2017 . Tese (Doutorado em Engenharia
            Elétrica) - Universidade Federal de Itajubá, Conselho Nacional de
            Desenvolvimento Científico e Tecnológico. Orientador: Danilo
            Henrique Spadoti.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Sabi Yari Moïse Bandiri. Desenvolvimento de técnicas de eficiência
            energética para redes inteligentes e redes ópticas. Início: 2015.
            Tese (Doutorado em Engenaria Elétrica) - Universidade Federal de
            Itajubá, Conselho Nacional de Desenvolvimento Científico e
            Tecnológico. (Orientador).
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Renan Alves dos Santos. Sistema irradiante faixa larga e
            reconfigurável espacialmente. Início: 2016. Tese (Doutorado em
            Engenharia Elétrica) - Universidade Federal de Itajubá,Coordenação
            de Aperfeiçoamento de Pessoal de Nível Superior.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Reinaldo Lima de Abreu. Projeto e Desenvolvimento de Dispositivo
            para Transmissão de Energia Elétrica Sem Fios por Modos Ressonantes.
            2017. Tese (Doutorado em Engenharia Elétrica) - Universidade Federal
            de Itajubá, Fundação de Amparo à Pesquisa do Estado de Minas Gerais.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Igor Feliciano da Costa. Arranjos de Antenas em Guia Fendido para
            Redes Celulares 5G e Radares. 2013. Tese (Doutorado em Doutorado
            Engenharia Elétrica) - Universidade Federal de Itajubá, Conselho
            Nacional de Desenvolvimento Científico e Tecnológico. Orientador:
            Danilo Henrique Spadoti.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Mateus Augusto Faustino Chaib Junqueira. Métodos Algébricos para
            Mapeamento Quase-Conforme na Transformada Óptica. 2012. Tese
            (Doutorado em Doutorado Engenharia Elétrica) - Universidade Federal
            de Itajubá, Coordenação de Aperfeiçoamento de Pessoal de Nível
            Superior. Orientador: Danilo Henrique Spadoti.
          </li>
        </ul>

        <h4> {en ? "Dissertations" : "Dissertações"} </h4>
        <ul>
          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            {" "}
            Iúri Barros Werneck Dotta. Sistema de análise e detecção automática
            de estágios do sono em exames de polissonografia.. 2015. Dissertação
            (Mestrado em Ciência e Tecnologia da Computação) - Universidade
            Federal de Itajubá, Conselho Nacional de Desenvolvimento Científico
            e Tecnológico. Orientador: Danilo Henrique Spadoti.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Rafael Motta Coutinho. Estudo de técnicas de integração entre redes
            de acesso ópticas e redes sem-fio. 2013. Dissertação (Mestrado em
            Ciência e Tecnologia da Computação) - Universidade Federal de
            Itajubá, Coordenação de Aperfeiçoamento de Pessoal de Nível
            Superior. Orientador: Danilo Henrique Spadoti.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Reinaldo Lima de Abreu. Projeto e Desenvolvimento de Dispositivo
            para Transmissão de Energia Elétrica Sem Fios por Modos Ressonantes.
            2011. Dissertação (Mestrado em Engenharia Elétrica) - Universidade
            Federal de Itajubá, Conselho Nacional de Desenvolvimento Científico
            e Tecnológico. Coorientador: Danilo Henrique Spadoti.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            {" "}
            Daniel Matumona Mulato. Aplicabilidade da equação de Helmholtz em
            meios não-homogêneos obtidos do uso de mapeamentos quase-conformes.
            Início: 2016. Dissertação (Mestrado em Engenharia Elétrica) -
            Universidade Federal de Itajubá, Coordenação de Aperfeiçoamento de
            Pessoal de Nível Superior.
          </li>

          <li style={{ marginBottom: 15, textAlign: "justify" }}>
            Rafael de Souza Martins Braga. Algorítimo de roteamento em redes de
            fibra óptica utilizando técnica de modulação adaptativa Início:
            2015. Dissertação (Mestrado em Ciência e Tecnologia da Computação) -
            Universidade Federal de Itajubá, Coordenação de Aperfeiçoamento de
            Pessoal de Nível Superior.
          </li>
        </ul>
      </Card.Body>
    </Card>
  </Container>
);

export default Teses;
