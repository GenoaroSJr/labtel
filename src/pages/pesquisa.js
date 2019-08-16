import React from 'react'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'

const Pesquisa = ({ en }) => (
	<Container style={{ marginTop: 20 }}>
		<h2>{en ? 'Research Lines' : 'Linhas de Pesquisa'}</h2>
		<Card />
		<Row>
			<Col md={12} style={{ textAlign: 'justify' }}>
				<h3>{en ? 'Integrated Optics:' : 'Óptica Integrada:'}</h3>
				<p>
					{en ? (
						<>
						aa
						</>
					) : (
						<>
						Nesta linha de pesquisa focamos nossos trabalhos na chamada "Fotônica
						do Silício" (Silicon Photonics), ou mais especificamente,
						"Nanofotônica do Silício", que além de ser um campo emergente de
						pesquisa e tecnologia é uma realidade de inovação presente em novos
						produtos. Nossos estudos incluem avanços em nano-dispositivos de
						silício ou nitreto de silício, tais como: guias de onda, ressonadores
						ópticos e acopladores baseados grades de Bragg. Dentro desta linha,
						destacam-se as simulações computacionais em:
					</>)}
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={6} style={{ paddingTop: '2%' }}>
				<h4>Transformada Óptica e Invisibilidade:</h4>
				<p>
					{' '}
					Busca-se desenvolver novas estratégias para a realização de
					mapeamentos, em óptica transformacional, que resultem em uma
					transformação cujo meio óptico resultante seja isotrópico ou com baixa
					anisotropia. Estudamos e investigamos diferentes transformações de
					coordenadas para guias de onda planares, cujos objetivos são modificar
					a trajetória da onda eletromagnética e desenvolver dispositivos como
					guiasde ondas, divisores de polarização isotrópicos a mantos de
					invisibilidade.
				</p>
			</Col>

			<Col md={6} style={{ paddingTop: '2%' }}>
				<Image
					fluid
					src={require('../imagens/imagemOptica3.jpg')}
					height="75%"
					width="75%"
					alt=""
				/>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<Image fluid src={require('../imagens/imagemOptica2.jpg')} alt="" />
			</Col>

			<Col md={6} style={{ paddingTop: '2%' }}>
				<h4>Design e Modelagem de Nano Grades de Silício:</h4>
				<p>
					{' '}
					O acoplamento óptico dos dispositivos nanofotônicos pode ser realizado
					via Grades de Bragg. A modelagem computacional dessas grades é
					fundamental para aumentar a eficiência de acoplamento entres os guias
					em nano-escalas e as convencionais fibras ópticas de uma rede de
					telecomunicações. Assim, nesta linha, simulamos novos arranjos
					estruturais dos guias, camadas refletoras e diferentes dopagens
					visando aumentar a eficiência de acoplamento.
				</p>
			</Col>
		</Row>
		<hr />
		<Row>
			<Col md={12} style={{ textAlign: 'justify' }}>
				<h3>Fibras Ópticas de Cristal Fotônico:</h3>
				<p>
					Nesta linha de pesquisa o foco é na investigação desta nova classe de
					fibras ópticas, baseada no conceito de cristais fotônicos, denominada
					fibra óptica de cristal fotônico (PCF - Photonic Crystal Fiber) ou
					fibra microestruturada (MOF - Microstructured Optical Fiber). Sua
					geometria particular, com materiais de diferentes índices de refração
					estruturados de forma periódica, permite uma alta flexibilidade de
					projeto. Consegue-se, portanto, ajustar, conforme a necessidade, as
					propriedades de dispersão, área efetiva, perdas por confinamento,
					entre outras, o que torna estas fibras especialmente úteis para
					aplicações em comunicações ópticas. Dentro desta linha, destacam-se as
					simulações computacionais em:
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={6} style={{ paddingTop: '2%' }}>
				<h4>Sensoriamento Óptico:</h4>
				<p>
					{' '}
					A dispersão cromática é um dos principais fatores limitantes nos
					atuais sistemas de transmissão de dados via fibra óptica. Logo, é
					fundamental o desenvolvimento de dispositivos ópticos capazes de
					compensar esse indesejado efeito. As fibras ópticas de cristal
					fotônico empregadas para compensação de dispersão, devido sua
					geometria, destacam-se pela sua alta maleabilidade no projeto de
					curvas de dispersão. Nesta linha, buscamos manipular adequadamente os
					parâmetros geométricos e estruturais das PCFs para alterar, conforme
					necessidade e palicação, os valores da dispersão cromática das fibras.{' '}
				</p>
			</Col>

			<Col md={6}>
				<img
					class="img-responsive"
					src={require('../imagens/imagemSensoriamentoOptico.jpg')}
					alt=""
				/>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<img
					class="img-responsive"
					src={require('../imagens/imagemCompressaoDispersao.jpg')}
					alt=""
				/>
			</Col>

			<Col md={6} style={{ paddingTop: '2%' }}>
				<h4>Design e Modelagem de Nano Grades de Silício:</h4>
				<p>
					{' '}
					O acoplamento óptico dos dispositivos nanofotônicos pode ser realizado
					via Grades de Bragg. A modelagem computacional dessas grades é
					fundamental para aumentar a eficiência de acoplamento entres os guias
					em nano-escalas e as convencionais fibras ópticas de uma rede de
					telecomunicações. Assim, nesta linha, simulamos novos arranjos
					estruturais dos guias, camadas refletoras e diferentes dopagens
					visando aumentar a eficiência de acoplamento.
				</p>
			</Col>
		</Row>
		<hr />

		<Row>
			<Col md={12} style={{ textAlign: 'justify' }}>
				<h3>Antenas e Propagação:</h3>
				<p>
					Nesta linha de pesquisa o foco é na investigação teórica e prática de
					novas antenas e arranjos de antenas capazes de atuarem, com máxima
					eficiência, alto ganho, apresentarem auto-sintonia e, também, podendo
					ser opticamente controladas. Com isso, podemos desenvolver antenas
					operando em banda larga e ou podendo operar em diferentes faixas de
					freqüências.Dentro desta linha, destacam-se as simulações e
					experimentos em:
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={6} style={{ paddingTop: '2%' }}>
				<h4> Transferência de energia sem fios:</h4>
				<p>
					{' '}
					Sabe-se que a eficiência na transmissão de energia sem fios está
					diretamente relacionada com a distância de separação entre o
					dispositivo transmissor e receptor. Ademais, a transferência de
					energia é extremamente sensível à frequência de ressonância de
					operação do sistema. Assim, buscamos desenvolver analítica, numérica,
					e experimentalmente dispositivos para transferência de energia sem
					fios, auto-sintonizáveis, capazes de operar sempre no ponto de máxima
					eficiência.
				</p>
			</Col>

			<Col md={6} style={{ paddingTop: '2%' }}>
				<Image fluid src={require('../imagens/imagemAntenaSemfio.jpg')} />
			</Col>
		</Row>
		<Row>
			<Col md={6} style={{ paddingTop: '1%' }}>
				<Image fluid src={require('../imagens/imagemAntenaBanda2.jpg')} />
			</Col>

			<Col md={6} style={{ paddingTop: '4%' }}>
				<h4>Antenas banda-larga assistidas por lentes:</h4>
				<p>
					{' '}
					A proposição inicial é investigar, por meio de simulações numéricas e
					experimentos práticos, novos arranjos geométricos de antenas
					banda-larga assistidos por lentes dielétricas. Busca-se, assim,
					desenvolver novas soluções para os atuais gargalos existentes em
					sistemas de comunicação sem fio, projetando antenas com alto ganho, e
					ainda assim, operando em uma larga faixa do espectro. Estas novas
					antenas serão projetadas juntamente com uma lente dielétrica para
					operar na faixa de UHF (0,3GHz), até o início da faixa de TeraHertz
					(300GHz).
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={6} style={{ paddingTop: '4%', textAlign: 'justify' }}>
				<h4>Antenas opticamente controladas:</h4>
				<p>
					Nesta aplicação, busca-se desenvolver antenas que apresentem padrões
					reconfiguráveis e controladas opticamentes, operando na faixa de
					freqüência de onda milimétrica. Chaves de silício são usadas para
					controlar a reconfiguração óptica, modificando a resposta em
					freqüência e o padrão de radiação da antena. Portanto, projetamos e
					desenvolvemos novas estruturas e arranjos de antenas, controlados
					opticamente pela chave óptica, a qual apresenta resposta extremamente
					rápida. Este projeto é desenvolvido em parceria com o grupo{' '}
					<a href="http://www.inatel.br/woca/">WOCA</a> do INATEL{' '}
				</p>
			</Col>

			<Col md={6} style={{ paddingTop: '1%' }}>
				<Image fluid src={require('../imagens/imagemAntenaControlada.jpg')} />
			</Col>
		</Row>
		<hr />
		<Row>
			<Col class="col-md-12 text-justify">
				<h3>
					<font color="red">
						<b>NEW</b>
					</font>{' '}
					Redes de Telecomunicações
				</h3>
			</Col>
		</Row>
		<Row>
			<Col md={6} style={{ paddingTop: '2%' }}>
				<p>
					O rápido crescimento das tecnologias de informação e de comunicação
					tem causado um aumento considerável do consumo de energia. Assim, a
					redução dos gastos energéticos em redes de telecomunicações tem se
					tornado uma das questões a serem solucionadas. Dessa forma, tem-se
					desenvolvido técnicas e algoritmos capazes de reduzir estes gastos
					energéticos nas redes telecom, especificamente, nas denominadas redes
					ópticas elásticas (EON- Elastic Optical Network). Portanto, nesta
					linha de pesquisa, busca-se desenvolver técnicas inteligentes, capazes
					de melhorar a eficiência energética em redes óptcas.
				</p>
			</Col>

			<Col md={6} style={{ paddingTop: '1%' }}>
				<Image fluid src={require('../imagens/imagemRedeTelecom.jpg')} />
			</Col>
		</Row>
		<hr />
		<Row>
			<Col md={12} style={{ textAlign: 'justify' }}>
				<h3>
					<font color="red">
						<b>NEW</b>
					</font>{' '}
					Dispositivos em Terahertz
				</h3>
			</Col>
		</Row>
		<Row>
			<Col md={6} style={{ paddingTop: '2%' }}>
				<p>
					Modelagem do efeito eletro-óptico em dispositivos LID, para aplicações
					em moduladores que operam na faixa dos THz. O objetivo deste projeto é
					desenvolver um modulador eletro-óptico aplicando a técnica de
					confinamento da onda eletromagnética no meio com menor índice de
					refração, através da descontinuidade na interface entre os meios, tal
					como ocorre nos dispositivos conhecidos como LIDs. Para tanto,
					investiga-se o efeito eletro-óptico em cristais anisotrópicos
					pertencentes a esta categoria de dispositivos ópticos.
				</p>
			</Col>

			<Col md={6}>
				<Image
					fluid
					src={require('../imagens/imagemTera.jpg')}
					style={{ width: '80%', paddingLeft: '20' }}
				/>
			</Col>
		</Row>
	</Container>
)

export default Pesquisa
