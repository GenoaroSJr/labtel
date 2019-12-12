import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

const Pesquisa = ({ en }) => (
  <Container style={{ marginTop: 20, padding: 20 }}>
    <h2>{en ? "Research Lines" : "Linhas de Pesquisa"}</h2>
    <Card />
    <Row>
      <Col md={12} style={{ textAlign: "justify" }}>
        <h3>{en ? "Integrated Optics:" : "Óptica Integrada:"}</h3>
        <p>
          {en ? (
            <>
              In this research line, we focus our work on the so-called "Silicon
              Photonics", or more specifically "Silicon Nanophotonics", which
              besides being an emerging field of research and technology, it's a
              reality of innovation present in new products. Our research
              includes advances in nano-silicon devices or silicon nitride, such
              as: waveguides, optical resonators and couplers based on Bragg
              grids. Within this line, we highlight the computational
              simulations in:
            </>
          ) : (
            <>
              Nesta linha de pesquisa focamos nossos trabalhos na chamada
              "Fotônica do Silício" (Silicon Photonics), ou mais
              especificamente, "Nanofotônica do Silício", que além de ser um
              campo emergente de pesquisa e tecnologia é uma realidade de
              inovação presente em novos produtos. Nossos estudos incluem
              avanços em nano-dispositivos de silício ou nitreto de silício,
              tais como: guias de onda, ressonadores ópticos e acopladores
              baseados grades de Bragg. Dentro desta linha, destacam-se as
              simulações computacionais em:
            </>
          )}
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6} style={{ paddingTop: "2%" }}>
        <h4>
          {en
            ? "Optical Transform and Invisibility:"
            : "Transformada Óptica e Invisibilidade:"}
        </h4>
        <p>
          {en ? (
            <>
              We seek development on new strategies of mapping in transformal
              optics that result in a transformation whose resulting optical
              medium is isotropic or has low anisotropy. We study and
              investigate different coordinate transformations for planar
              waveguides, whose goals are to modify the trajectory of the
              eletromagnetic wave and develop devices such as waveguides,
              isotropic polarization dividers or even invisibility mantles.
            </>
          ) : (
            <>
              Busca-se desenvolver novas estratégias para a realização de
              mapeamentos, em óptica transformacional, que resultem em uma
              transformação cujo meio óptico resultante seja isotrópico ou com
              baixa anisotropia. Estudamos e investigamos diferentes
              transformações de coordenadas para guias de onda planares, cujos
              objetivos são modificar a trajetória da onda eletromagnética e
              desenvolver dispositivos como guiasde ondas, divisores de
              polarização isotrópicos a mantos de invisibilidade.
            </>
          )}
        </p>
      </Col>

      <Col md={6} style={{ paddingTop: "2%" }}>
        <Image
          fluid
          src={require("../imagens/imagemOptica3.jpg")}
          height="75%"
          width="75%"
          alt=""
        />
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Image fluid src={require("../imagens/imagemOptica2.jpg")} alt="" />
      </Col>

      <Col md={6} style={{ paddingTop: "2%" }}>
        <h4>
          {en
            ? "Design and Modeling of Silicon Nano Grids:"
            : "Design e Modelagem de Nano Grades de Silício:"}
        </h4>
        <p>
          {en ? (
            <>
              The optical coupling of nano-photonic devices can be made via
              Bragg Grids. The computacional modeling of these grids is
              fundamental to increase the coupling efficiency between the
              nanoscale guides and the conventional optical fibers of a
              telecommunication network. Thus, in this research line, we
              simulate new structural arrangements of guides, reflective layers
              and different doping in order to increase the coupling efficiency.
            </>
          ) : (
            <>
              O acoplamento óptico dos dispositivos nanofotônicos pode ser
              realizado via Grades de Bragg. A modelagem computacional dessas
              grades é fundamental para aumentar a eficiência de acoplamento
              entres os guias em nano-escalas e as convencionais fibras ópticas
              de uma rede de telecomunicações. Assim, nesta linha, simulamos
              novos arranjos estruturais dos guias, camadas refletoras e
              diferentes dopagens visando aumentar a eficiência de acoplamento.
            </>
          )}
        </p>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col md={12} style={{ textAlign: "justify" }}>
        <h3>
          {en
            ? "Photonic Crystal Optical Fibers:"
            : "Fibras Ópticas de Cristal Fotônico:"}
        </h3>
        <p>
          {en ? (
            <>
              In this research line, we focus on the investigation of this new
              class of optical fibers, based on the concept of photonic
              crystals, called Photonic Crystal Fiber (PCF) or Microstructured
              Optical Fiber (MOF). By using materials with different refraction
              indexes periodically structured, its particular geometry allows a
              high project flexibility. Therefore, it's possible to adjust, as
              required, the dispersion properties, effective area, confinement
              losses, and so on. It makes these fibers especially useful for
              applications in optical communications. Within this research line,
              we highlight the computational simulation in:
            </>
          ) : (
            <>
              Nesta linha de pesquisa o foco é na investigação desta nova classe
              de fibras ópticas, baseada no conceito de cristais fotônicos,
              denominada fibra óptica de cristal fotônico (PCF - Photonic
              Crystal Fiber) ou fibra microestruturada (MOF - Microstructured
              Optical Fiber). Sua geometria particular, com materiais de
              diferentes índices de refração estruturados de forma periódica,
              permite uma alta flexibilidade de projeto. Consegue-se, portanto,
              ajustar, conforme a necessidade, as propriedades de dispersão,
              área efetiva, perdas por confinamento, entre outras, o que torna
              estas fibras especialmente úteis para aplicações em comunicações
              ópticas. Dentro desta linha, destacam-se as simulações
              computacionais em:
            </>
          )}
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6} style={{ paddingTop: "2%" }}>
        <h4>{en ? "Optical Sensing:" : "Sensoriamento Óptico:"}</h4>
        <p>
          {en ? (
            <>
              Chromatic dispersion is one of the main limiting factors in
              current fiber-optic data transmission systems. So, the development
              of optical devices capable of compensating this unwanted effect is
              fundamental. The photonic crystal optical fibers used for
              dispersion compesation, due to their geometry, stand out for their
              high malleability in the design of dispersion curves. In this
              research line, we seek to adequately manipulate the geometric and
              structural parameters of PCFs to modify, according to necessity
              and palation, the fibers chromatic dispersion values.
            </>
          ) : (
            <>
              A dispersão cromática é um dos principais fatores limitantes nos
              atuais sistemas de transmissão de dados via fibra óptica. Logo, é
              fundamental o desenvolvimento de dispositivos ópticos capazes de
              compensar esse indesejado efeito. As fibras ópticas de cristal
              fotônico empregadas para compensação de dispersão, devido sua
              geometria, destacam-se pela sua alta maleabilidade no projeto de
              curvas de dispersão. Nesta linha, buscamos manipular adequadamente
              os parâmetros geométricos e estruturais das PCFs para alterar,
              conforme necessidade e palicação, os valores da dispersão
              cromática das fibras.
            </>
          )}
        </p>
      </Col>

      <Col md={6}>
        <img
          class="img-responsive"
          src={require("../imagens/imagemSensoriamentoOptico.jpg")}
          alt=""
        />
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <img
          class="img-responsive"
          src={require("../imagens/imagemCompressaoDispersao.jpg")}
          alt=""
        />
      </Col>

      <Col md={6} style={{ paddingTop: "2%" }}>
        <h4>
          {en
            ? "Design and Modeling of Silicon Nano Grids:"
            : "Design e Modelagem de Nano Grades de Silício:"}
        </h4>
        <p>
          {en ? (
            <>
              The optical coupling of nano-photonic devices can be made via
              Bragg Grids. The computacional modeling of these grids is
              fundamental to increase the coupling efficiency between the
              nanoscale guides and the conventional optical fibers of a
              telecommunication network. Thus, in this research line, we
              simulate new structural arrangements of guides, reflective layers
              and different doping in order to increase the coupling efficiency.
            </>
          ) : (
            <>
              O acoplamento óptico dos dispositivos nanofotônicos pode ser
              realizado via Grades de Bragg. A modelagem computacional dessas
              grades é fundamental para aumentar a eficiência de acoplamento
              entres os guias em nano-escalas e as convencionais fibras ópticas
              de uma rede de telecomunicações. Assim, nesta linha, simulamos
              novos arranjos estruturais dos guias, camadas refletoras e
              diferentes dopagens visando aumentar a eficiência de acoplamento.
            </>
          )}
        </p>
      </Col>
    </Row>
    <hr />

    <Row>
      <Col md={12} style={{ textAlign: "justify" }}>
        <h3>{en ? "Antennas and Propagation:" : "Antenas e Propagação:"}</h3>
        <p>
          {en ? (
            <>
              In this research line, the focus is on the theoretical and
              practical investigation of new antennas and antenna arrangements
              capable of performing high gain with maximum efficiency,
              self-tuning and also being optically controlled. Then, we can
              develop antennas operating in broadband and/or operating in
              different frequencies bands. Within this research line, we
              highlight the simulations and experiments in:
            </>
          ) : (
            <>
              Nesta linha de pesquisa o foco é na investigação teórica e prática
              de novas antenas e arranjos de antenas capazes de atuarem, com
              máxima eficiência, alto ganho, apresentarem auto-sintonia e,
              também, podendo ser opticamente controladas. Com isso, podemos
              desenvolver antenas operando em banda larga e ou podendo operar em
              diferentes faixas de freqüências.Dentro desta linha, destacam-se
              as simulações e experimentos em:
            </>
          )}
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6} style={{ paddingTop: "2%" }}>
        <h4>
          {en
            ? "Wireless power transfer:"
            : "Transferência de energia sem fios:"}
        </h4>
        <p>
          {en ? (
            <>
              It's a known fact that the efficiency of wireless energy
              transmission is directly related to the distance between the
              transmitting and receiving device. Plus, the energy transfer is
              extremely sensitive to the operating resonance frequency of the
              system. Thus, we seek to develop analytical, numerical, and
              experimentally self-tuning, wireless energy transfer devices
              capable of operating at the point of maximum efficiency.
            </>
          ) : (
            <>
              Sabe-se que a eficiência na transmissão de energia sem fios está
              diretamente relacionada com a distância de separação entre o
              dispositivo transmissor e receptor. Ademais, a transferência de
              energia é extremamente sensível à frequência de ressonância de
              operação do sistema. Assim, buscamos desenvolver analítica,
              numérica, e experimentalmente dispositivos para transferência de
              energia sem fios, auto-sintonizáveis, capazes de operar sempre no
              ponto de máxima eficiência.
            </>
          )}
        </p>
      </Col>

      <Col md={6} style={{ paddingTop: "2%" }}>
        <Image fluid src={require("../imagens/imagemAntenaSemfio.jpg")} />
      </Col>
    </Row>
    <Row>
      <Col md={6} style={{ paddingTop: "1%" }}>
        <Image fluid src={require("../imagens/imagemAntenaBanda2.jpg")} />
      </Col>

      <Col md={6} style={{ paddingTop: "4%" }}>
        <h4>
          {en
            ? "Lens-assisted wide-band antennas:"
            : "Antenas banda-larga assistidas por lentes:"}
        </h4>
        <p>
          {en ? (
            <>
              The initial proposition is to investigate, through numerical
              simulations and practical experiments, new geometric arrangements
              of wide-band antennas assisted by dielectric lenses. So, we seek
              the development of new solutions for the existing issues in
              wireless communication systems, designing high gain antennas, and
              yet operating across a broad spectrum range. These new antennas
              will be designed along with a dielectric lens to operate in the
              UHF range (0.3GHz), up to the beginning of the TeraHertz range
              (300GHz).
            </>
          ) : (
            <>
              A proposição inicial é investigar, por meio de simulações
              numéricas e experimentos práticos, novos arranjos geométricos de
              antenas banda-larga assistidos por lentes dielétricas. Busca-se,
              assim, desenvolver novas soluções para os atuais gargalos
              existentes em sistemas de comunicação sem fio, projetando antenas
              com alto ganho, e ainda assim, operando em uma larga faixa do
              espectro. Estas novas antenas serão projetadas juntamente com uma
              lente dielétrica para operar na faixa de UHF (0,3GHz), até o
              início da faixa de TeraHertz (300GHz).
            </>
          )}
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6} style={{ paddingTop: "4%", textAlign: "justify" }}>
        <h4>
          {en
            ? "Optically controlled antennas:"
            : "Antenas opticamente controladas:"}
        </h4>
        <p>
          {en ? (
            <>
              In this application, it's sought to develop antennas with
              reconfigurable and optically controlled standards, operating in
              the millimetric wave frequency range. Silicon switches are used to
              control optical reconfiguration by modifying the frequency
              response and antenna radiation pattern. Therefore, we design and
              develop new antenna structures and arrangements, controlled
              optically by the optical switch, which responds extremely fast.
              This project is developed in partnership with the{" "}
              <a href="http://www.inatel.br/woca/">WOCA</a> team from INATEL
            </>
          ) : (
            <>
              Nesta aplicação, busca-se desenvolver antenas que apresentem
              padrões reconfiguráveis e controladas opticamentes, operando na
              faixa de freqüência de onda milimétrica. Chaves de silício são
              usadas para controlar a reconfiguração óptica, modificando a
              resposta em freqüência e o padrão de radiação da antena. Portanto,
              projetamos e desenvolvemos novas estruturas e arranjos de antenas,
              controlados opticamente pela chave óptica, a qual apresenta
              resposta extremamente rápida. Este projeto é desenvolvido em
              parceria com o grupo <a href="http://www.inatel.br/woca/">WOCA</a>{" "}
              do INATEL
            </>
          )}
        </p>
      </Col>

      <Col md={6} style={{ paddingTop: "1%" }}>
        <Image fluid src={require("../imagens/imagemAntenaControlada.jpg")} />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col class="col-md-12 text-justify">
        <h3>
          {en ? "Telecomunication Networks" : "Redes de Telecomunicações"}
        </h3>
      </Col>
    </Row>
    <Row>
      <Col md={6} style={{ paddingTop: "2%" }}>
        <p>
          {en ? (
            <>
              The fast growth of information and communication technologies has
              led to a considerable increase in energy consumption. Thus, the
              reduction of energy costs in telecommunications networks has
              become one of the issues to be solved. In this way, we have
              developed techniques and algorithms capable of reducing these
              energy expenditures in telecom networks, specifically in the
              so-called Elastic Optical Networks (EON). Therefore, in this
              research line, we seek to develop smart techniques, capable of
              improving energy efficiency in optical networks.
            </>
          ) : (
            <>
              O rápido crescimento das tecnologias de informação e de
              comunicação tem causado um aumento considerável do consumo de
              energia. Assim, a redução dos gastos energéticos em redes de
              telecomunicações tem se tornado uma das questões a serem
              solucionadas. Dessa forma, tem-se desenvolvido técnicas e
              algoritmos capazes de reduzir estes gastos energéticos nas redes
              telecom, especificamente, nas denominadas redes ópticas elásticas
              (EON- Elastic Optical Network). Portanto, nesta linha de pesquisa,
              busca-se desenvolver técnicas inteligentes, capazes de melhorar a
              eficiência energética em redes óptcas.
            </>
          )}
        </p>
      </Col>

      <Col md={6} style={{ paddingTop: "1%" }}>
        <Image fluid src={require("../imagens/imagemRedeTelecom.jpg")} />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col md={12} style={{ textAlign: "justify" }}>
        <h3>{en ? "Terahertz Devices" : "Dispositivos em Terahertz"}</h3>
      </Col>
    </Row>
    <Row>
      <Col md={6} style={{ paddingTop: "2%" }}>
        <p>
          {en ? (
            <>
              Modeling of the electro-optical effect in LID devices, for
              applications in THz range modulators. The objective of this
              project is to develop an electro-optical modulator by applying the
              technique of confinement of the electromagnetic wave in lower
              refraction index environment, through the discontinuity in the
              interface between the environments, as what happens in devices
              known as LIDs. For this, the electro-optical effect is
              investigated in anisotropic crystals that belong to this category
              of optical devices.
            </>
          ) : (
            <>
              Modelagem do efeito eletro-óptico em dispositivos LID, para
              aplicações em moduladores que operam na faixa dos THz. O objetivo
              deste projeto é desenvolver um modulador eletro-óptico aplicando a
              técnica de confinamento da onda eletromagnética no meio com menor
              índice de refração, através da descontinuidade na interface entre
              os meios, tal como ocorre nos dispositivos conhecidos como LIDs.
              Para tanto, investiga-se o efeito eletro-óptico em cristais
              anisotrópicos pertencentes a esta categoria de dispositivos
              ópticos.
            </>
          )}
        </p>
      </Col>

      <Col md={6}>
        <Image
          fluid
          src={require("../imagens/imagemTera.jpg")}
          style={{ width: "80%", paddingLeft: "20" }}
        />
      </Col>
    </Row>
  </Container>
);

export default Pesquisa;
