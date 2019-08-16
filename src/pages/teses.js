import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Teses = ({ en }) => (
	<Container style={{ marginTop: 20 }}>
		<h1>{en ? 'Theses and Dissertations' : 'Teses e Dissertações'}</h1>
		<Card />

		<div class="row">
			<div class="col-lg-12">
				<h2 class="page-header">Em andamento</h2>
			</div>

			<div class="col-md-12 text-justify">
				<div class="thumbnail" style={{ paddingBottom: '1%' }}>
					<div class="caption">
						<h4> Teses </h4>
						<ul>
							<li class="PubliListas">
								Gabriel Lobão da Silva Fré. Projeto e desenvolvimento de um
								Mux/Demux óptico utilizando cristais fotônicos desenvolvidos via
								Transformada Óptica. Início: 2016. Tese (Doutorado em Engenharia
								Elétrica) - Universidade Federal de Itajubá, Conselho Nacional
								de Desenvolvimento Científico e Tecnológico.
							</li>

							<li class="PubliListas">
								Andreia Aparecida de Castro Alves. Projeto e desenvolvimento de
								um filtro opticamente reconfigurável utilizando grafeno para
								aplicações em ondas milimétricas. Início: 2015. Tese (Doutorado
								em Engenharia Elétrica) - Universidade Federal de Itajubá,
								Coordenação de Aperfeiçoamento de Pessoal de Nível Superior.
							</li>

							<li class="PubliListas">
								Poliane Aires Teixeira. Desenvolvimento de sensores baseados em
								metamaterias empregando as geometrias fractais. Início: 2015.
								Tese (Doutorado em Engenharia Elétrica) - Universidade Federal
								de Itajubá, Coordenação de Aperfeiçoamento de Pessoal de Nível
								Superior.
							</li>

							<li class="PubliListas">
								{' '}
								Daniely Gomes Silva. Otimizaçãonumérica aplicada à transformada
								óptica para obtenção de mapeamentoquase-conforme em mantos de
								invisibilidade tri-dimensionais. Início: 2015. Tese(Doutorado em
								Engenharia Elétrica) - Universidade Federal de
								Itajubá,Coordenação de Aperfeiçoamento de Pessoal de Nível
								Superior.
							</li>

							<li class="PubliListas">
								Décio Renno. Sistema de Rastreamento e Direcionamento de Sinais
								para Sistemas 5G e IoT. Início: 2017 . Tese (Doutorado em
								Engenharia Elétrica) - Universidade Federal de Itajubá, Conselho
								Nacional de Desenvolvimento Científico e Tecnológico.
								Orientador: Danilo Henrique Spadoti.
							</li>
						</ul>

						<h4> Dissertações </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								Denis Varise Bernardes. Otimização dos modos de operação do
								sistema de aquisição do instrumento SPARC4. Início: 2018 -
								Universidade Federal de Itajubá,Coordenação de Aperfeiçoamento
								de Pessoal de Nível Superior.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-lg-12">
				<h2 class="page-header">Finalizadas</h2>
			</div>

			<div class="col-md-12 text-justify">
				<div class="thumbnail" style={{ paddingBottom: '1%' }}>
					<div class="caption">
						<h4> Teses </h4>
						<ul>
							<li class="PubliListas">
								Sabi Yari Moïse Bandiri. Desenvolvimento de técnicas de
								eficiência energética para redes inteligentes e redes ópticas.
								Início: 2015. Tese (Doutorado em Engenaria Elétrica) -
								Universidade Federal de Itajubá, Conselho Nacional de
								Desenvolvimento Científico e Tecnológico. (Orientador).
							</li>

							<li class="PubliLista">
								Renan Alves dos Santos. Sistema irradiante faixa larga e
								reconfigurável espacialmente. Início: 2016. Tese (Doutorado em
								Engenharia Elétrica) - Universidade Federal de
								Itajubá,Coordenação de Aperfeiçoamento de Pessoal de Nível
								Superior.
							</li>

							<li class="PubliListas">
								Reinaldo Lima de Abreu. Projeto e Desenvolvimento de Dispositivo
								para Transmissão de Energia Elétrica Sem Fios por Modos
								Ressonantes. 2017. Tese (Doutorado em Engenharia Elétrica) -
								Universidade Federal de Itajubá, Fundação de Amparo à Pesquisa
								do Estado de Minas Gerais.
							</li>

							<li class="PubliListas">
								Igor Feliciano da Costa. Arranjos de Antenas em Guia Fendido
								para Redes Celulares 5G e Radares. 2013. Tese (Doutorado em
								Doutorado Engenharia Elétrica) - Universidade Federal de
								Itajubá, Conselho Nacional de Desenvolvimento Científico e
								Tecnológico. Orientador: Danilo Henrique Spadoti.
							</li>

							<li class="PubliListas">
								Mateus Augusto Faustino Chaib Junqueira. Métodos Algébricos para
								Mapeamento Quase-Conforme na Transformada Óptica. 2012. Tese
								(Doutorado em Doutorado Engenharia Elétrica) - Universidade
								Federal de Itajubá, Coordenação de Aperfeiçoamento de Pessoal de
								Nível Superior. Orientador: Danilo Henrique Spadoti.
							</li>
						</ul>

						<h4> Dissertações </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								Iúri Barros Werneck Dotta. Sistema de análise e detecção
								automática de estágios do sono em exames de polissonografia..
								2015. Dissertação (Mestrado em Ciência e Tecnologia da
								Computação) - Universidade Federal de Itajubá, Conselho Nacional
								de Desenvolvimento Científico e Tecnológico. Orientador: Danilo
								Henrique Spadoti.
							</li>

							<li class="PubliListas">
								Rafael Motta Coutinho. Estudo de técnicas de integração entre
								redes de acesso ópticas e redes sem-fio. 2013. Dissertação
								(Mestrado em Ciência e Tecnologia da Computação) - Universidade
								Federal de Itajubá, Coordenação de Aperfeiçoamento de Pessoal de
								Nível Superior. Orientador: Danilo Henrique Spadoti.
							</li>

							<li class="PubliListas">
								Reinaldo Lima de Abreu. Projeto e Desenvolvimento de Dispositivo
								para Transmissão de Energia Elétrica Sem Fios por Modos
								Ressonantes. 2011. Dissertação (Mestrado em Engenharia Elétrica)
								- Universidade Federal de Itajubá, Conselho Nacional de
								Desenvolvimento Científico e Tecnológico. Coorientador: Danilo
								Henrique Spadoti.
							</li>

							<li class="PubliListas">
								{' '}
								Daniel Matumona Mulato. Aplicabilidade da equação de Helmholtz
								em meios não-homogêneos obtidos do uso de mapeamentos
								quase-conformes. Início: 2016. Dissertação (Mestrado em
								Engenharia Elétrica) - Universidade Federal de Itajubá,
								Coordenação de Aperfeiçoamento de Pessoal de Nível Superior.
							</li>

							<li class="PubliListas">
								Rafael de Souza Martins Braga. Algorítimo de roteamento em redes
								de fibra óptica utilizando técnica de modulação adaptativa
								Início: 2015. Dissertação (Mestrado em Ciência e Tecnologia da
								Computação) - Universidade Federal de Itajubá, Coordenação de
								Aperfeiçoamento de Pessoal de Nível Superior.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Container>
)

export default Teses
