import React from 'react'
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
import Membro from '../components/membro'

const Equipe = ({ en }) => (
	<Container>
		<h2 style={{ marginTop: 15 }}>
			{en ? 'Research Team' : 'Equipe de Pesquisadores'}
		</h2>
		<Card style={{ marginBottom: 20 }} />

		<Row>
			<Col md={8} align="center">
				<Image fluid src={require('../imagens/imagemGrupo2.jpg')} />
			</Col>
			<Col>
				<ListGroup variant="flush">
					<ListGroup.Item action href="#professores">
						Professores
					</ListGroup.Item>

					<ListGroup.Item action href="#posDoutorado">
						Pós-Doutorado
					</ListGroup.Item>

					<ListGroup.Item action href="#doutourando">
						Doutorando
					</ListGroup.Item>

					<ListGroup.Item action href="#mestrando">
						Mestrando
					</ListGroup.Item>

					<ListGroup.Item action href="#graduando">
						Graduando
					</ListGroup.Item>

					<ListGroup.Item action href="#antigosMembros">
						Membros Antigos
					</ListGroup.Item>
				</ListGroup>
			</Col>
		</Row>

		<div name="professores" id="professores" style={{ marginTop: 30 }}>
			<Row lg={12}>
				<h2>Professores</h2>
			</Row>

			<Membro
				nome="Danilo Henrique Spadoti"
				titulo="Doutor em Engenharia Elétrica"
				texto="Possui graduação em Engenharia Elétrica pela Universidade
									Federal de Itajubá (2002). Concluiu o mestrado (2004) e o
									doutorado (2008) em Engenharia Elétrica, área de concentração
									telecomunicações, pela USP - Universidade de São Paulo. Em
									2009, fez o pós-doutoramento no exterior, junto ao Grupo de
									Nanofotônica da Universidade de Cornell, Ithaca, EUA. Em 2010
									foi bolsista Fapesp de pós-doutorado na Universidade
									Presbiteriana Mackenzie. Em 2012 trabalhou como pesquisador
									visitante, com bolsa Erasmus Mundus, no centro de pesquisa
									IMEC, em Leuven, Bélgica. No ano de 2016 recebeu Certificação
									Profissional RFID - IDentificação por Rádio Frequência.
									Atualmente é professor Adjunto III, na área de sistemas de
									telecomunicações e eletromagnetismo aplicado, na Universidade
									Federal de Itajubá - UNIFEI. Tem experiência na área de
									engenharia elétrica, com ênfase em telecomunicações, atuando,
									principalmente, nos seguintes temas: comunicações ópticas,
									fotônica, fibras ópticas de cristal fotônico e fotônica do silício"
				link="http://lattes.cnpq.br/8760117075106351"
				img={require('../imagens/equipe/daniloImagem.jpg')}
			/>

			<Membro
				nome="José Antônio Justino Ribeiro"
				titulo="Doutor em Engenharia Elétrica"
				texto="Possui graduação em Engenharia de Operacao em Telecomunicacoes
									pelo Instituto Nacional de Telecomunicações(1969), graduação
									em Engenharia Elétrica pelo Instituto Nacional de
									Telecomunicações(1973), mestrado em Engenharia Eletrônica pelo
									Instituto Tecnológico de Aeronáutica(1980), doutorado em
									Engenharia Eletrônica e Computação pelo Instituto Tecnológico
									de Aeronáutica(1998), curso-tecnico-profissionalizantepela
									Escola Técnica de Eletrônica Francisco Moreira da Costa(1966),
									ensino-fundamental-primeiro-graupelo Ginásio Santo
									Antônio(1962) e ensino-medio-segundo-graupela Escola Técnica
									de Eletrônica Francisco Moreira da Costa(1965). Atualmente é
									professor titular do Instituto Nacional de Telecomunicações,
									professor titular da Universidade Federal de Itajubá,
									professor titular da Escola Técnica de Eletrônica Francisco
									Moreira da Costa, Revisor de periódico da Telecomunicações
									(Santa Rita do Sapucaí), Revisor de periódico da IEEE Latin
									America Transaction e Revisor de periódico da Journal of
									Applied Soft Computing. Tem experiência na área de Engenharia
									Elétrica, com ênfase em Telecomunicações. Atuando
									principalmente nos seguintes temas:Microondas, Modulação
									eletroóptica, Guias ópticos, Processamento de sinais ópticos."
				link="http://lattes.cnpq.br/9987344139958522"
				img={require('../imagens/equipe/justinoImagem.jpg')}
			/>
		</div>

		<div name="posDoutorado" id="posDoutorado" style={{ marginTop: 30 }}>
			<Row lg={12}>
				<h2>Pós-Doutorado</h2>
			</Row>
			<Membro
				nome="Reinaldo Lima de Abreu"
				titulo="	Doutor em Engenharia Elétrica"
				texto="É Engenheiro de Controle e Automação com Mestrado em
									Engenharia Elétrica com ênfase em Automação e Sistemas
									Elétricos Industriais. Possui conhecimentos em pesquisa em
									desenvolvimento de Transferência de Energia Elétrica Sem Fio,
									dispositivos de RFID, desenvolvimento de softwares e sistemas
									embarcados (projeto de hardware e firmware); Tem experiência
									na área de Engenharia Elétrica, com ênfase em Controle de
									Processos Eletrônicos, Retroalimentação. Trabalhou com projeto
									de dispositivos de transferência de energia sem fios na
									graduação e mestrado. Desenvolveu produtos embarcados na área
									de medição de impedância e medição consumo de energia e água.
									Desenvolveu softwares de plataforma web voltado a internet das
									coisas e comunicações sem fios. Atualmente trabalha com
									projetos de sistemas embarcados (C, linux), softwares web
									(html5, javascript, css3, php) e foco principal na pesquisa de
									dispositivos para transferência de energia sem fios."
				link="http://lattes.cnpq.br/7672920933339124"
				img={require('../imagens/equipe/reinaldoImagem.jpg')}
			/>
		</div>

		<div name="doutourando" id="doutourando" style={{ marginTop: 30 }}>
			<Row lg={12}>
				<h2>Doutourando</h2>
			</Row>

			<Membro
				nome="Andreia Aparecida de Castro Alves"
				titulo="Mestre em Telecomunicações"
				texto="Atualmente cursa Doutorado em Engenharia Elétrica com ênfase
									em Microeletrônica pela Universidade Federal de Itajubá.
									Possui mestrado e graduação em Sistemas de Telecomunicações
									também pela Universidade Estadual de Campinas (2013). Tem
									experiência na área de pesquisa e desenvolvimento de etiquetas
									de RFID chipless, filtros, amplificadores de potência e
									amplificadores de baixo ruído para aviões não tripulados
									(VANTs), radares SAR e radares de Monopulso. Atualmente é
									pesquisador voluntário no laboratório de Wireless and Optical
									Convergent Access (WOCA) do Inatel, onde desenvolve atividades
									de pesquisa acadêmica e atividades em parceria com a empresa
									Bradar Indústria S/A do grupo Embraer Defesa, onde participou
									de projetos de pesquisa e desenvolvimento."
				link="http://lattes.cnpq.br/3831378780875013"
				img={require('../imagens/equipe/andreiaImagem.jpg')}
			/>

			<Membro
				nome="Gabriel Lobão da Silva Fré"
				titulo="Mestre em Telecomunicações"
				texto="Graduado em engenharia elétrica pelo Instituto Nacional de
									Telecomunicações em 2013, atuando no departamento de
									desenvolvimento de Hardware da mesma instituição, o ICC até
									2015. Ainda no Inatel, concluiu o mestrado em telecomunicações
									em 2016, de onde foi bolsista FINATEL e FAPEMIG. Atuou como
									Instrutor de laboratório na forma de estagiário docente ao
									longo dos anos de 2014 e 2015, na disciplina de eletrônica
									analógica. Atuou também como professor na Faculdade de
									Ciências Sociais Aplicadas de Extrema (FAEX), ao ministrar
									disciplinas tais como Fìsica I e II, Càlculo I e II e
									Eletromagnetismo."
				link="http://lattes.cnpq.br/2539115151670208"
				img={require('../imagens/equipe/lobaoImagem.png')}
			/>

			<Membro
				nome="Poliane Aires Teixeira"
				titulo="Mestre em Telecomunicações"
				texto="Doutoranda em Engenharia Elétrica pela Universidade Federal de
									Itajubá,possui Mestrado em Telecomunicações pelo Instituto
									Nacional de Telecomunicações, Graduação em Engenharia Elétrica
									com ênfase em Telecomunicações pelo Instituto Nacional de
									Telecomunicações e curso técnico-profissionalizante pela
									Escola Técnica de Eletrônica Francisco Moreira da Costa."
				link="http://lattes.cnpq.br/4964865294025484"
				img={require('../imagens/equipe/polianeImagem.png')}
			/>

			<Membro
				nome="Daniely Gomes Silva"
				titulo="Mestre em Telecomunicações"
				texto="Possui graduação em Engenharia Elétrica, modalidade em
									Eletrônica com ênfase Telecomunicações, pelo Instituto
									Nacional de Telecomunicações (INATEL), em 2007. Durante seus
									estudos no INATEL, estagiou nas empresas Furnas Centrais
									Elétricas S.A., Hitachi Kokusai Linear Equipamentos
									Eletrônicos S.A. e no Inatel Competence Center (ICC) Hardware.
									Em 2008, participou do Curso de Formação de Projetistas de
									Circuitos Integrados Digitais (CI Brasil - CT2) e também do
									Curso de Formação de Instrutores de Circuitos Integrados
									Digitais (2009), no qual obteve certificação internacional na
									ferramenta Encounter RTL Compiler v7.2 pela empresa Cadence
									Design Systems, em Cary - NC - USA. Deste 2007 atuou como
									engenheira do ICC Hardware em projetos nas áreas de
									comunicação digital e microeletrônica. Em 2012, participou de
									um treinamento na Índia, em microeletrônica analógica, na
									empresa SparkLab Engineering System PVT. LTD. Em 2013,
									concluiu o mestrado na área de circuitos integrados
									analógicos. De 2011 a 2016 participou de um projeto de
									circuito integrado de sinais mistos para sensores indutivos de
									proximidade e também ministrou aulas de VHDL/FPGA para alunos
									de engenharia do INATEL. Atualmente cursa Doutorado em
									Engenharia Elétrica, com ênfase em Microeletrônica, pela
									Universidade Federal de Itajubá. Neste curso está
									desenvolvendo projetos de otimização numérica aplicada à
									transformada óptica para obtenção de mapeamento quase-conforme
									em mantos de invisibilidade tri-dimensionais e também
									prototipagem de guias de ondas em 3D obtidas a partir de
									transformação óptica quase-conforme e otimização numérica."
				link="http://lattes.cnpq.br/7357330731419401"
				img={require('../imagens/equipe/danielyImagem.jpg')}
			/>

			<Membro
				nome="Décio Rennó de Mendonça Faria"
				titulo="Mestre em Engenharia Elétrica"
				texto="Atualmente é professor substituto de Eletrônica Aplicada e
									doutorando na área de eletromagnetismo na UNIFEI, Universidade
									Federal de Itajubá , mestre em Engenharia Elétrica pela
									Universidade Federal de Itajubá (2016), graduado em Engenharia
									Elétrica pela Universidade Federal de Itajubá (2002), graduado
									em Matemática Aplicada à Informática (análise de sistemas)
									pela Fundação de Ensino e Pesquisa de Itajubá (1994) , possui
									Licenciatura em Eletrônica pela Faculdade Paulista São José
									(2015), formação Técnica em Eletrônica pela E. E. Técnico
									Industrial Tancredo Neves de Brasópolis, MG (1989). Possui
									experiência em projetos e manutenção de circuitos eletrônicos
									analógicos, digitais e de rádio frequência, desenvolvimento de
									software em sistemas embarcados e projeto de antenas."
				link="http://lattes.cnpq.br/8122238750933560"
				img={require('../imagens/equipe/decioImagem.jpg')}
			/>

			<Membro
				nome="Afonso José de Faria"
				titulo="Mestre em Telecomunicações"
				texto="Possui Graduação em Engenharia Elétrica pelo Instituto
									Nacional de Telecomunicações - MG (INATEL, 1992) e Mestrado em
									Telecomunicações, também pelo INATEL, em 2014. Atualmente é
									diretor de de pesquisa e desenvolvimento, diretor de
									manufatura na NITERE Indústria de Produtos Eletrônicos, em
									Santa Rita do Sapucaí, MG. Sua área de interesse e pesquisa
									inclui redes de comunicação sem fios de próxima geração,
									protocolos de múltiplo acesso, alocação de recursos e análise
									de desempenho de redes de comunicação sem fios. Tem longa
									experiência em Engenharia Elétrica, com ênfase em circuitos
									eletroeletrônicos, tecnologia da informação e processos
									industriais."
				link="http://lattes.cnpq.br/5612797500196336"
				img={require('../imagens/equipe/afonsoImagem.jpg')}
			/>
		</div>
		<div name="mestrando" id="mestrando" style={{ marginTop: 30 }}>
			<Col lg={12}>
				<h2>Mestrando</h2>
			</Col>

			<Membro
				nome="Denis Varise Bernardes"
				titulo="Bacharel em Engenharia Física"
				texto="Graduação em Engenharia Física, pela Escola de Engenharia de
									Lorena (EEL - USP) no período de Fevereiro de 2012 a Julho
									2017. Durante este período, foi desenvolvido um projeto de
									pesquisa da otimização do tempo de cura de materiais abrasivos
									resinóides. A aquisição de dados foi feita pelo
									microprocessador Arduino. Monitor das disciplinas Eletrônica e
									Instrumentação e Introdução à Eletrônica e Computação Física.
									Membro do Centro Acadêmico de Engenharia Física, no período de
									Dezembro de 2015 a Julho de 2016. Estágio supervisionado no
									Laboratório Nacional de Astrofísica no período de Julho de
									2016 a Julho de 2017, onde desenvolveu-se uma metodologia para
									caracterização do ruído de leitura, corrente de escuro, ganho
									eletrônico e eficiência quântica de quatro câmeras CCDs iXon
									Ultra do instrumento SPARC4. Bolsista PCI no Laboratório
									Nacional de Astrofísica, no período de Setembro de 2017 a
									Julho de 2018 com o projeto de desenvolvimento do sistema do
									controle de aquisição do instrumento SPARC4 na plataforma
									LabVIEW. Mestrando na Universidade Federal de Itajubá, com
									início em Julho de 2018 com o projeto da determinação dos
									modos ótimos de operação do sistema de aquisição do SPARC4
									através de redes neurais para observação astronômica."
				link="http://lattes.cnpq.br/9842101872947354"
				img={require('../imagens/equipe/denisImagem.jpg')}
			/>

			<Membro
				nome="Adelson Angelo Julião Malichi"
				titulo="Bacharel em Engenharia Elétrica"
				texto="Graduado em engenharia elétrica pelo Instituto Nacional de
									Telecomunicações em 2016, possui experiência em rádio
									frequência na área de otimização de sites (radio base) das
									redes móveis de 3ª e 4ª geração pela Huawei-Brasil. Atualmente
									cursa o mestrado em Engenharia Elétrica com o Projeto de um
									Sistema de Integração Entre Circuitos Nanofotônicos e Fibras
									Ópticas de Cristal Fotônico."
				link="http://lattes.cnpq.br/3322501927530019"
				img={require('../imagens/equipe/adelsonImagem.jpg')}
			/>
		</div>

		<div name="graduando" id="graduando" style={{ marginTop: 30 }}>
			<Col lg={12}>
				<h2>Graduando</h2>
			</Col>

			<Membro
				nome="Érika Mayumi Saito Tagima"
				titulo="Técnica em Mecatrônica"
				texto="Graduanda em Engenharia de Controle e Automação pela
									Universidade Federal de Itajubá. Possui técnico em Mecatrônica
									pelo Instituto Federal de Educação, Ciência e Tecnologia de
									São Paulo – campus Bragança Paulista. Pesquisa na área de
									identificação por rádio frequência (RFID) e tem interesse pelo
									desenvolvimento de aplicativos no sistema Android."
				link="http://lattes.cnpq.br/0602363885001213"
				img={require('../imagens/equipe/erikaImagem.jpg')}
			/>

			<Membro
				nome="Tales Henrique Carvalho"
				titulo="Graduando em Engenharia de Controle e Automação"
				texto="Graduando em Engenharia de Controle e Automação na UNIFEI.
									Possuo experiência em programação embarcada e em
									desenvolvimento de aplicações para dispositivos móveis.
									Atualmente estou realizando meu Trabalho Final de Graduação na
									área de IoT, com enfoque na programação de dispositivos
									embarcados que comunicam via protocolo LoRaWAN."
				link="http://lattes.cnpq.br/0624693729878452"
				img={require('../imagens/equipe/talesImagem.jpg')}
			/>

			<Membro
				nome="Aline Amorim"
				titulo="Graduanda em Engenharia Elétrica"
				texto="Graduanda em Engenharia Elétrica na Universidade Federal de
									Itajubá. Atuou no Centro Acadêmico de Engenharia Elétrica, na
									área de projetos, onde auxiliou a organização de visitas
									técnicas, mini cursos e eventos, como a Semana de Engenharia
									Elétrica. Atualmente, é bolsista de Iniciação Científica e faz
									pesquisa na área de IoT."
				link="http://lattes.cnpq.br/3716207589737678"
				img={require('../imagens/equipe/alineImagem.jpg')}
			/>

			<Membro
				nome="Felipe Yamasaki Hirota"
				titulo="Graduando em Engenharia Eletrônica"
				texto="Atualmente, graduando na Universidade Federal de Itajubá
									(UNIFEI) no curso de Engenharia Eletrônica. com início em 2014
									e previsão de conclusão em dezembro de 2019. Desenvolvendo seu
									Trabalho Final de Graduação na área de IoT pesquisando sobre a
									tecnologia LoRa e protocolo LoRaWAN. Atual estagiário no
									Laboratório Nacional de Astrofísica (LNA), atuando no projeto
									e desenvolvimento da unidade de calibração do Espectrógrafo
									Echelle de Alta Resolução para o Telescópio Perkin-Elmer
									(ECHARPE). Início em dezembro de 2018 com previsão de
									conclusão em dezembro de 2019."
				link="http://lattes.cnpq.br/3924201044335857"
				img={require('../imagens/equipe/felipeImagem.jpg')}
			/>
		</div>
		<div name="antigosMembros" id="antigosMembros" style={{ marginTop: 30 }}>
			<Col lg={12}>
				<h2>Membros Antigos</h2>
			</Col>

			<Membro
				nome="Giordana Maria Rodrigues"
				titulo="Bacharel em Engenharia Elétrica"
				texto="Engenheira Eletricista pelo INATEL - Instituto Nacional de
									Telecomunicações Santa Rita do Sapucaí, MG - Conclusão: julho
									de 2000 - Curso Engenharia Elétrica, modalidade em Eletrônica
									e ênfase em Telecomunicações. Atualmente é aluna de mestrado
									em em Engenharia de Microeletrônica na UNIFEI (Itajubá - MG).
									Experiência profissional, de 17 anos, no ramo aeronáutico, com
									foco em desenvolvimento de sistemas aviônicos, sistemas de
									comunicações, rádios, antenas, radares e armamentos."
				link="http://lattes.cnpq.br/9630980283008475"
				img={require('../imagens/equipe/giordanaImagem.jpg')}
			/>

			<Membro
				nome="Guilherme Alberti da Silva"
				titulo="Tecnólogo em Redes de Computadores"
				texto="Graduando na Universidade Federal de Itajubá em Engenharia de
									Computação (2016). Possui graduação em Tecnologia em Redes de
									Computadores pelo Instituto Federal de Educação, Ciência e
									Tecnologia do Sul de Minas Gerais (2015). Tem experiência na
									área de Ciência da Computação, com ênfase em Desempenho de
									Redes."
				link="http://lattes.cnpq.br/6969167942231865"
				img={require('../imagens/equipe/guilhermeImagem.jpg')}
			/>

			<Membro
				nome="Rafael de Souza Martins Braga"
				titulo="Bacharel em Ciência da Computação"
				texto="Graduado em Ciência da Computação pela Universidade Federal de
								Itajubá em julho de 2015. Atualmente é aluno do curso de
								mestrado de Ciência e Tecnologia da Unifei, atua na área de
								criação de algoritmos que visam a redução de consumo em redes de
								fibra óptica utilizando técnicas como modulação adaptativa."
				link="http://lattes.cnpq.br/0852967826039995"
				img={require('../imagens/equipe/rafaelImagem.jpg')}
			/>

			<Membro
				nome="Weslei Carlos da Silva"
				titulo="Técnico em Eletroeletrônica"
				texto="Graduando em Engenharia Elétrica pela Universidade Federal de
								Itajubá - UNIFEI Itajubá - MG, Desde 2017. Possui formação
								técnica em eletroeletrônica, no Centro de Educação Profissional
								de Itajubá - CEP Itajubá - MG, concluída no segundo semestre de
								2016. Estuda e atua na área elétrica desde 2001, onde na
								Instituição SENAI A. Jacob Lafer - Santo André - SP, realizou o
								curso de aprendizagem industrial - eletricista de manutenção I,
								e atuando na Empresa MAHLE COFAP ANÉIS - Mauá – SP. Atualmente,
								é micro empreendedor individual e responsável técnico pela
								empresa ALPHA SOLUÇÕES ELÉTRICAS, e parceiro de empresas do
								setor de engenharia, controle e automação, do setor de
								manutenção de motores de indução eletromagnética e, também, do
								setor de sustentabilidade e geração de energia fotovoltaica."
				link="http://lattes.cnpq.br/1651245120335907"
				img={require('../imagens/equipe/wesleyImagem.jpg')}
			/>

			<Membro
				nome="Alex Junio Ribeiro Campos"
				titulo="Técnico em Eletromecânica"
				texto="Graduando em Engenharia de Controle e Automação pela
								Universidade Federal de Itajubá. Possui Curso Técnico em
								Eletromecânica (concluído no segundo semestres de 2015), e curso
								de Qualificação Profissional Reparador de Equipamento Mecânico
								(concluído no segundo semestres de 2013), ambos pela instituição
								SENAI Santos Dumont de São Jose dos Campos. Atualmente pesquisa
								na área de Desenvolvimento de uma plataforma móvel radial para
								medidores de diagrama de irradiação automático."
				link="http://lattes.cnpq.br/2883577037075954"
				img={require('../imagens/equipe/alexImagem.jpg')}
			/>

			<Membro
				nome="Renan Alves dos Santos"
				titulo="Mestre em Telecomunicações"
				texto="Graduado em Engenharia de Telecomunicações em julho de 2014 e
								mestre em Telecomunicações em julho de 2016, ambos pelo
								Instituto Nacional de Telecomunicações - Inatel. Atualmente é
								aluno de doutorado em Engenharia Elétrica da Universidade
								Federal de Itajubá. Atuou como monitor voltário de
								microinformática no programa Social Casa Viva em 2010, foi
								monitor nos laboratórios de Física e Circuitos Elétricos em 2011
								e 2012 e fez estágio docente na disciplina de Antenas e
								Propagação nos anos de 2015 e 2016, ambos no Inatel. De 2013 à
								2016 atuou com pesquisa e desenvolvimento de dispositivos de
								radiofrequência em uma parceria entre o laboratório WOCA do
								Inatel e a empresa Bradar Embraer Defesa e Segurança."
				link="http://lattes.cnpq.br/0181780491504693"
				img={require('../imagens/equipe/renanImagem.jpg')}
			/>

			<Membro
				nome="Moïse S.Y. BANDIRI"
				titulo="Mestre em Telecomunicações"
				texto="Possui graduação em Engenharia Elétrica com ênfase em Eletrônica
								e Telecomunicaciones pelo Instituto Superior Politécnico José
								Antonio Echeverría(ISPJAE/ HABANA-CUBA-2012), Mestrado em
								Telecomunicações pelo Instituto Nacional de Telecomunicações
								(INATEL-2015). Atualmente é aluno de Doutorado e pesquisador da
								Universidade Federal de Itajuba (UNIFEI). Tem experiência na
								área de Engenharia Elétrica, nas redes celulares com ênfase em
								planejamento de sistemas celulares e analise de desempenho das
								redes de Telecomunicações em geral."
				link="http://lattes.cnpq.br/2818665148998081"
				img={require('../imagens/equipe/moiseImagem.jpg')}
			/>

			<Membro
				nome="Daniel de Almeida Arantes"
				titulo=""
				texto="Graduando em Engenharia Eletrônica na Universidade Federal de
								Itajubá, Estudo de moduladores eletrópticos baseados em
								ressoadores."
				link="http://lattes.cnpq.br/5108061853359949"
				img={require('../imagens/equipe/danielArantesImagem.jpg')}
			/>

			<Membro
				nome="Igor Feliciano da Costa"
				titulo="Doutor em Engenharia Elétrica"
				texto="Possui doutorado em engenharia elétrica pela Universidade
								Federal de Itajubá, mestrado em Telecomunicações pelo Instituto
								Nacional de Telecomunicações - Inatel (2013) e graduação em
								Tecnologia em Telecomunicações pela Universidade Estadual de
								Campinas (2011). Tem experiência na área de pesquisa e
								desenvolvimento de antenas para aviões não tripulados (VANTs),
								radares SAR, radares de Monopulso, antenas reconfiguráveis e
								antenas na faixa de ondas milimétricas. Atualmente é pesquisador
								voluntário no laboratório de Wireless and Optical Convergent
								Access (WOCA) do Inatel, onde desenvolve atividades de pesquisa
								acadêmica e atividades em parceria com a empresa Bradar
								Indústria S/A do grupo Embraer Defesa, onde nos últimos 3 anos
								juntamente com o Prof.Dr. Arismar Cerqueira Sodré Jr.,
								participou de projetos de pesquisa e desenvolvimento. Realizou o
								desenvolvimento de antenas para sensoriamento remoto,
								desenvolveu as antenas para o sistema de comunicação em tempo
								real do SARVANT, um dos primeiros VANTS (Veículo Aéreo Não
								Tripulado) a serem desenvolvidos com tecnologia nacional,
								projetou as antenas dos radares para o VANT Falcão e
								recentemente participa de projetos vinculados ao Sisfron
								(Sistema Integrado de Monitoramento de Fronteiras)."
				link="http://lattes.cnpq.br/4239219024992491"
				img={require('../imagens/equipe/igorImagem.jpg')}
			/>

			<Membro
				nome="Fábio Rocha da Silva"
				titulo=""
				texto="Graduando em Engenharia de Computação pela Universidade Federal
								de Itajubá, tem interesse em computação embarcada, processamento
								digital de sinais e comunicações sem fio. Desenvolveu estudo em
								antenas fractais de banda larga para comunicação 5G, utilizando
								a geometria do triângulo de Sierpinski."
				link=""
				img={require('../imagens/equipe/fabioImagem.jpg')}
			/>
		</div>
	</Container>
)

export default Equipe
