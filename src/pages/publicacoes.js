import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Publicacoes = ({ en }) => (
	<Container style={{ marginTop: 20 }}>
		<h2>{en ? 'Publications' : 'Publicações'}</h2>
		<Card />
		<div class="row">
			<details>
				<summary>
					<div class="col-lg-12">
						<h2 class="page-header">Livros</h2>
					</div>
				</summary>

				<div class="col-md-12 text-justify">
					<div class="thumbnail" style={{ paddingBottom: '1%' }}>
						<div class="caption">
							<ul>
								<li class="PubliListas">
									RIBEIRO, J. A. J.. Engenharia de antenas: fundamentos,
									projetos e aplicações. 1. ed. São Paulo - SP: Editora Érica
									Ltda., 2012. v. 01. 564p .
								</li>

								<li class="PubliListas">
									RIBEIRO, J. A. J.. Propagação de ondas eletromagnéticas:
									princípios e aplicações. 2. ed. São Paulo - SP: Editora Érica
									Ltda, 2008. v. 1. 390p .
								</li>

								<li class="PubliListas">
									RIBEIRO, J. A. J.. Engenharia de Microondas. 1. ed. São Paulo:
									Editora Érica Limitada, 2008. v. 1. 608p .
								</li>

								<li class="PubliListas">
									{' '}
									RIBEIRO, J. A. J.. Comunicações ópticas. 3. ed. São Paulo -
									SP: Editora Érica Ltda., 2007. v. 1. 450p .
								</li>
							</ul>
						</div>
					</div>
				</div>
			</details>

			<summary>
				<div class="col-lg-12">
					<h2 class="page-header">2019</h2>
				</div>
			</summary>

			<div class="col-md-12 text-justify">
				<div class="thumbnail" style={{ paddingBottom: '1%' }}>
					<div class="caption">
						<h4> Revistas </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								FARIA, D. R. M., DOS SANTOS, R. A., SANTOS, K. M. G., SPADOTI,
								D. H. . A System to improve the management of 5G and IoT
								Networks by determining the Mobile Position. Journal of
								Microwaves, Optoelectronics and Electromagnetic Applications,
								2019.
							</li>
							<li class="PubliListas">
								{' '}
								DOS SANTOS, R. A. ; FRÉ, G. L. ; SPADOTI, D. H. . Technique for
								constructing hemispherical dielectric lens antennas. MICROWAVE
								AND OPTICAL TECHNOLOGY LETTERS, v. 61, p. 1349-1357, 2019.
							</li>
							<br />>
							<li class="PubliListas">
								{' '}
								SILVA, A. A. ; BAREA, L. A. M. ; SPADOTI, D. H. ; DE FRANCISCO,
								C. A. . Hollow-core negative curvature fibers for application in
								optical gas sensors. OPTICAL ENGINEERING 58(7), 072011 (3 May
								2019).
							</li>
						</ul>
						<h4> Congressos </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								ALVES, A. A. C. ; SILVA, L. ; BOAS, E. C. ; Spadoti, Danilo H. ;
								S. JR, A. C. . Mechanically Tunable Horn Filtenna for mm-waves.
								In: 13th European Conference on Antennas and Propagation
								(EUCAP), 2019, Cracóvia. 13th European Conference on Antennas
								and Propagation (EUCAP), 2019.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<summary>
				<div class="col-lg-12">
					<h2 class="page-header">2018</h2>
				</div>
			</summary>

			<div class="col-md-12 text-justify">
				<div class="thumbnail" style={{ paddingBottom: '1%' }}>
					<div class="caption">
						<h4> Revistas </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								SODRÉ, ARISMAR CERQUEIRA ; DA COSTA, IGOR FELICIANO ; DOS
								SANTOS, RENAN ALVES ; FILGUEIRAS, HUGO RODRIGUES DIAS ; SPADOTI,
								DANILO HENRIQUE . Waveguide-Based Antenna Arrays for 5G
								Networks. International Journal of Antennas and Propagation, v.
								2018, p. 1-10, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								BANDIRI, S. Y. M. ; PIMENTA, T. C. ; SPADOTI, D. H. . Adaptive
								Modulation and Code Strategy to Reduce Energy Consumption in
								Elastic Optical Network. JOURNAL OF MICROWAVES, OPTOELECTRONICS
								AND ELECTROMAGNETIC APPLICATIONS, v. 17, p. 65-84, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								BORGES, RAMON MAIA ; REIS RUFINO MARINS, TIAGO ; SEDA BORSATO,
								MATHEUS ; RODRIGUES DIAS FILGUEIRAS, HUGO ; DA COSTA, IGOR
								FELICIANO ; SILVA, REGIVAN ; SPADOTI, DANILO HENRIQUE ; LEONEL
								MENDES, LUCIANO ; CERQUEIRA, ARISMAR . Integration of a
								GFDM-based 5G Transceiver in a GPON using Radio over Fiber
								Technology. JOURNAL OF LIGHTWAVE TECHNOLOGY, v. 1, p. 1-1, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								CARVALHO, WILLIAM O. F. ; Spadoti, Danilo H. ; SILVESTRE,
								ENRIQUE ; BELTRAN-MEJIA, FELIPE . Ultralow chirp photonic
								crystal fiber Mach-Zehnder interferometer. APPLIED OPTICS, v.
								57, p. 4228, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								ALVES, A. A. C. ; SPADOTI, D. H. ; BRAVO-ROGER, L. L. .
								Optically Controlled Multiresonator for Passive Chipless Tag.
								IEEE MICROWAVE AND WIRELESS COMPONENTS LETTERS, v. 1, p. 1-3,
								2018.
							</li>

							<li class="PubliListas">
								{' '}
								BORGES, R. M. ; MARINS, T. R. R. ; CUNHA, M. S. B. ; SPADOTI, D.
								H. ; MENDES, L. L. ; CERQUEIRA S. JR., ARISMAR . Implementation
								of a Multi-Gbit/s and GFDM-based Optical-Wireless 5G Network.
								JOURNAL OF MICROWAVES, OPTOELECTRONICS AND ELECTROMAGNETIC
								APPLICATIONS, v. 17, p. 579-589, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								SPADOTI, DANILO HENRIQUE ; GABRIELLI, LUCAS H. ; JUNQUEIRA,
								MATEUS A. F. C. ; SILVA, DANIELY G. ;TEIXEIRA, POLIANE A. .
								General multimode polarization splitter design in uniaxial
								media. OPTICAL ENGINEERING, v. 57, p. 1, 2018.
							</li>
						</ul>
						<h4> Congressos </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								BANDIRI, M. Y.M. ; MORALES, T. ; MARANTE, F. ; TALES C. PIMENTA
								; SPADOTI, DANILO . Energy efficiency improvement based on
								adaptative modulation in EON. In: XVII International Convetion
								and fais informatica, 2018, Cuba. XVII International Convetion
								and fais informatica, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								SILVA, A. A. ; PIZOLATTO JUNIOR, J. C. ; Spadoti, Danilo H. ;
								ALCANTARA, L.D.S. ; De Francisco, C. A. . Estudo das
								características de propagação de fibras de núcleo vazado e
								curvatura negativa visando sua aplicação em sensoriamento
								óptico. In: MOMAG 2018 - 18º SBMO - SIMPÓSIO BRASILEIRO DE
								MICRO-ONDAS E OPTOELETRÔNICA 13º CBMAG - CONGRESSO BRASILEIRO DE
								ELETROMAGNETISMO, 2018, Santa Rita do Sapucai. MOMAG 2018 - 18º
								SBMO - SIMPÓSIO BRASILEIRO DE MICRO-ONDAS E OPTOELETRÔNICA,
								2018.
							</li>

							<li class="PubliListas">
								{' '}
								DOS SANTOS, RENAN ALVES ; Spadoti, Danilo H. . Antena em Lente
								Dielétrica com Dupla polarização. In: MOMAG 2018 - 18º SBMO -
								SIMPÓSIO BRASILEIRO DE MICRO-ONDAS E OPTOELETRÔNICA 13º CBMAG -
								CONGRESSO BRASILEIRO DE ELETROMAGNETISMO, 2018, Santa Rita do
								Sapucai. MOMAG 2018 - 18º SBMO - SIMPÓSIO BRASILEIRO DE
								MICRO-ONDAS E OPTOELETRÔNICA, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								MULATO, D. ; Lucas H. Gabrielli ; Spadoti, Danilo H. ;
								JUNQUEIRA, M.A.F.C. . Estudo Sobre a Validade da Transformada
								Óptica Quase-Conforme. In: MOMAG 2018 - 18º SBMO ? SIMPÓSIO
								BRASILEIRO DE MICRO-ONDAS E OPTOELETRÔNICA 13º CBMAG ? CONGRESSO
								BRASILEIRO DE ELETROMAGNETISMO, 2018, Santa Rita do Sapucai.
								MOMAG 2018 - 18º SBMO ? SIMPÓSIO BRASILEIRO DE MICRO-ONDAS E
								OPTOELETRÔNICA, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								BORGES, RAMON MAIA ; REIS RUFINO MARINS, TIAGO ; SEDA, M. ;
								Spadoti, Danilo H. ; MENDES, L. L. ; S. JR, A. C. . Transceptor
								GFDM Integrado em Sistema Rádio sobre Fibra para Redes 5G. In:
								MOMAG 2018 - 18º SBMO - SIMPÓSIO BRASILEIRO DE MICRO-ONDAS E
								OPTOELETRÔNICA 13º CBMAG - CONGRESSO BRASILEIRO DE
								ELETROMAGNETISMO, 2018, Santa Rita do Sapucai. MOMAG 2018 - 18º
								SBMO - SIMPÓSIO BRASILEIRO DE MICRO-ONDAS E OPTOELETRÔNICA,
								2018.
							</li>

							<li class="PubliListas">
								{' '}
								ZANELLA, F. ; S. JR, A. C. ; ALVES, A. A. C. ; Spadoti, Danilo
								H. . Caracterização e Modelagem Quântica de Chaves
								Fotocondutivas de Silício Extrínseco. In: MOMAG 2018 - 18º SBMO
								- SIMPÓSIO BRASILEIRO DE MICRO-ONDAS E OPTOELETRÔNICA 13º CBMAG
								- CONGRESSO BRASILEIRO DE ELETROMAGNETISMO, 2018, Santa Rita do
								Sapucai. MOMAG 2018 - 18º SBMO - SIMPÓSIO BRASILEIRO DE
								MICRO-ONDAS E OPTOELETRÔNICA, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								SANTOS, D. A. ; ABREU, R. L. ; NOGUEIRA, T. ; BASTOS, G. S. ;
								Spadoti, Danilo H. . Investigação Numérica de um Sensor de
								Tensão Não Invasivo. In: MOMAG 2018 - 18º SBMO - SIMPÓSIO
								BRASILEIRO DE MICRO-ONDAS E OPTOELETRÔNICA 13º CBMAG - CONGRESSO
								BRASILEIRO DE ELETROMAGNETISMO, 2018, Santa Rita do Sapucai.
								MOMAG 2018 - 18º SBMO - SIMPÓSIO BRASILEIRO DE MICRO-ONDAS E
								OPTOELETRÔNICA, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								SILVA, D. G. ; TEIXEIRA, P. A. ; GABRIELLI, LUCAS ; JUNQUEIRA,
								M.A.F.C. ; Spadoti, Danilo H. . Achieving Invisibility in the
								Far Field with a 3D Carpet Cloak Design for Visible Light. In:
								Frontiers in Optics/Laser Science Conference (FiO/LS), 2018,
								Washington, D.C. Frontiers in Optics/Laser Science Conference
								(FiO/LS), 2018.
							</li>

							<li class="PubliListas">
								{' '}
								TEIXEIRA, P. A. ; SILVA, D. G. ; JUNQUEIRA, M.A.F.C. ; Spadoti,
								Danilo H. ; Lucas H. Gabrielli . Polarization Splitter with TE
								Homogeneous Media and TM Inhomogeneous Media. In: Frontiers in
								Optics/Laser Science Conference (FiO/LS), 2018, Washington, D.C.
								Frontiers in Optics/Laser Science Conference (FiO/LS), 2018.
							</li>

							<li class="PubliListas">
								{' '}
								BANDIRI, S. Y. M. ; MARANTE, F. R. R. ; PIMENTA, T. C. ;
								SPADOTI, D. H. . Energy Consumption Improvement Based on
								Adaptive FEC Code in Elastic Optical Network. In: 9th Latin
								American Symposium on Circuits & Systems - LASCAS, 2018. 9th
								Latin American Symposium on Circuits & Systems - LASCAS, -
								Puerto Vallarta, México, 2018.
							</li>

							<li class="PubliListas">
								{' '}
								FRÉ, G. L. S. ; MEJIA, F. B. ; PIMENTA, T. C. ; SPADOTI, D. H. .
								Low Loss Air Channel Modulator for Ultra High Frequency
								Operation. In: 9th Latin American Symposium on Circuits &
								Systems - LASCAS, 2018. 9th Latin American Symposium on Circuits
								& Systems - LASCAS, - Puerto Vallarta, México, 2018.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<summary>
				<div class="col-lg-12">
					<h2 class="page-header">2017</h2>
				</div>
			</summary>

			<div class="col-md-12 text-justify">
				<div class="thumbnail" style={{ paddingBottom: '1%' }}>
					<div class="caption">
						<h4> Revistas </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; Spadoti, Danilo H. ; S. JR, A. C. ; SILVA, L. ;
								PUERTA, R. ; OLMOS, J. J. V. ; MONROY, I. T. . Optically
								controlled reconfigurable antenna for 5G future broadband
								cellular communication networks. Journal of Microwaves,
								Optoelectronics and Electromagnetic Applications, v. 16, p. 208,
								2017.
							</li>

							<li class="PubliListas">
								{' '}
								I.F. Costa, Arismar Cerqueira S.J., D.H. Spadoti, L.G. da Silva,
								J.A.J. Ribeiro, S. Barbin, "Optically Controlled Reconfigurable
								Antenna Array for mm-wave Applications" IEEE Antennas and
								Wireless Propagation Letters, p.1-4, 2017
							</li>

							<li class="PubliListas">
								{' '}
								Bandiri, M. Y.M. ; Braga, R. M. S. ; Spadoti, Danilo H. .
								Analytical comparison of the performance of adaptive modulation
								and coding in wireless network under Rayleigh fading. Journal of
								Microwaves, Optoelectronics and Electrmagnetic Applications, v.
								16, p. 719, 2017.
							</li>

							<li class="PubliListas">
								{' '}
								Costa, I.F. ; Arismar C.S.Jr, Paes, J.S.R.; Puerta, R. ; Olmos,
								J.J.V.; Silva, L. ; Spadoti, D.H. ; Monroy, I.T.,
								“Photonics-Assisted Wireless Link Based on mm-wave
								Reconfigurable Antennas”, IET Microwaves Antennas & Propagation,
								v. 11, p. 1, 2017
							</li>

							<li class="PubliListas">
								{' '}
								Daniely G. Silva, Poliane A. Teixeira, Lucas Gabrielli, Mateus
								Junqueira, and Danilo Spadoti."A Full Three-Dimensional
								Isotropic Carpet Cloak Designed by Transformation Optics",
								Optical Express, v. 25, N 19, p. 23517-23522, 2017
							</li>
						</ul>
						<h4> Congressos </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; SPADOTI, D. H. ; S. JR, A. C. . Dual-band Slotted
								Waveguide Antenna Array for Adaptive Mm-wave 5G Networks. In:
								11th European Conference on Antennas and Propagation - EUCAP,
								2017. 11th European Conference on Antennas and Propagation -
								EUCAP, - Paris, França, 2017
							</li>

							<li class="PubliListas">
								{' '}
								Sabi Y.M. Bandiri, Rafael M.S. Braga and Danilo H.
								Spadoti,"Energy Consumption Improvement based on Distance
								Adaptive Modulation in Elastic Optical Network", 17
								International Caribbean Conference on Devices, Circuits and
								Systems (ICCDCS) – Cozumel, Mexico, 2017.
							</li>

							<li class="PubliListas">
								{' '}
								Andreia Aparecida Castro Alves, Danilo Henrique Spadoti, Sergio
								Pinna, Antonella Bogoni, Filippo Scotti, Arismar Cerqueira S.
								Jr., “Implementation of an Optically-Controlled Antenna in a
								dual-band Communications System, ”, International Microwave and
								Optoelectronics Conference - IMOC2017, Águas de Lindoia, Brasil
							</li>

							<li class="PubliListas">
								{' '}
								Daniely Silva, Poliane Teixeira, Lucas Heitzmann Gabrielli,
								Mateus Junqueira, Danilo Henrique Spadoti, “Full
								Three-Dimensional Broadband and Isotropic Carpet Cloak”,
								International Microwave and Optoelectronics Conference -
								IMOC2017, Águas de Lindoia, Brasil.
							</li>

							<li class="PubliListas">
								{' '}
								Igor da Costa, Danilo Henrique Spadoti, Arismar Cerqueira S.
								Jr., “Dual-Band Antenna Array with Beam Steering for mm-waves 5G
								Networks”, International Microwave and Optoelectronics
								Conference - IMOC2017, Águas de Lindoia, Brasil
							</li>

							<li class="PubliListas">
								{' '}
								Poliane Teixeira , Daniely Silva, Lucas Heitzmann Gabrielli,
								Danilo Henrique Spadoti, Mateus Junqueira, “Arbitrary Geometry
								Polarization Splitter Designed with Quasi-Conformal
								Transformation Optics”, International Microwave and
								Optoelectronics Conference - IMOC2017, Águas de Lindoia, Brasil
							</li>

							<li class="PubliListas">
								{' '}
								Daniely Silva, Poliane Teixeira, Lucas Heitzmann Gabrielli,
								Mateus Junqueira, Danilo Henrique Spadoti, “A Full
								Three-Dimensional Isotropic Carpet Cloak Designed by
								Transformation Optics”, Frontiers in Optics –FiO2017,
								Washington, District of Columbia, USA
							</li>

							<li class="PubliListas">
								{' '}
								Poliane Teixeira, Daniely Silva, Lucas Heitzmann Gabrielli,
								Danilo Henrique Spadoti, Mateus Junqueira, “ Polarization
								Splitter Design with Quasi-Conformal Transformation Optics”,
								Frontiers in Optics –FiO2017, Washington, District of Columbia,
								USA
							</li>
						</ul>
					</div>
				</div>
			</div>

			<summary>
				<div class="col-lg-12">
					<h2 class="page-header">2016</h2>
				</div>
			</summary>

			<div class="col-md-12 text-justify">
				<div class="thumbnail" style={{ paddingBottom: '1%' }}>
					<div class="caption">
						<h4> Revistas </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								JUNQUEIRA, MATEUS A. F. C. ; Gabrielli, L.H. ; BELTRÁN-MEJÍA,
								FELIPE ; SPADOTI, D. H. . Three-dimensional quasi-conformal
								transformation optics through numerical optimization. Optics
								Express, v. 24, p. 16465-16470, 2016.
							</li>
						</ul>
						<h4> Congressos </h4>
						<ul>
							<li class="PubliListas">
								{' '}
								MELO, S. ; PINNA, S. ; BOGONI, A. ; LAGHEZZA, F. ; SCOTTI, F. ;
								COSTA, I. F. ; Spadoti, Danilo H. ; S. JR, A. C. . Dual-use
								Simultaneous Radar-Communication System Based on Single
								Photonics-Based Transceiver. In: 21st International Conference
								on Microwave, Radar and Wireless Communications (MIKON), 2016,
								Croácia. 21st International Conference on Microwave, Radar and
								Wireless Communications (MIKON), 2016.
							</li>

							<li class="PubliListas">
								{' '}
								S. JR, A. C. ; COSTA, I. F. ; PINNA, S. ; MELO, S. ; LAGHEZZA,
								F. ; SCOTTI, F. ; GHELFI, P. ; Spadoti, Danilo H. ; BOGONI, A. .
								A Novel Dual-polarization and Dual-band Slotted Waveguide
								Antenna Array for Dual-use Radars. In: The 10th European
								Conference on Antennas and Propagation - EuCAP, 2016, Davos. The
								10th European Conference on Antennas and Propagation - EuCAP,
								2016.
							</li>

							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; RODRIGUEZ, S. ; PUERTA, R. ; OLMOS, J. J. V. ; S.
								JR, A. C. ; SILVA, L. ; SPADOTI, D. H. ; MONROY, I. T. .
								Photonic Downconversion and Optically Controlled Reconfigurable
								Antennas in mm-waves Wireless Networks. In: The Optical Fiber
								Communication Conference and Exhibition (OFC), 2016, Anaheim,
								California. The Optical Fiber Communication Conference and
								Exhibition (OFC), 2016.
							</li>

							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; S. JR, A. C. ; SILVA, L. ; OLMOS, J. J. V. ;
								Spadoti, Danilo H. ; MONROY, I. T. . Optically controlled
								reconfigurable antenna for 5G future broadband cellular
								communication networks. In: MOMAG - 17º SBMO - Simpósio
								Brasileiro de Micro-ondas e Optoeletrônica 12º CBMag - Congresso
								Brasileiro de Eletromagnetismo, 2016, Porto Alegre. MOMAG - 17º
								SBMO - Simpósio Brasileiro de Micro-ondas e Optoeletrônica 12º
								CBMag - Congresso Brasileiro de Eletromagnetismo, 2016.
							</li>

							<li class="PubliListas">
								{' '}
								ALVES, A. A. C. ; ABREU, R. L. ; Spadoti, Danilo H. ; S. JR, A.
								C. ; MOLOGNI, J. F. . Análise de Interferência Eletromagnética
								nos Sistemas RFID em Praças de Pedágio. In: MOMAG - 17º SBMO -
								Simpósio Brasileiro de Micro-ondas e Optoeletrônica 12º CBMag -
								Congresso Brasileiro de Eletromagnetismo, 2016, Porto Alegre.
								MOMAG - 17º SBMO - Simpósio Brasileiro de Micro-ondas e
								Optoeletrônica 12º CBMag - Congresso Brasileiro de
								Eletromagnetismo, 2016.
							</li>

							<li class="PubliListas">
								{' '}
								ABREU, R. L. ; L. B. Zoccal ; TALES C. PIMENTA ; Spadoti, Danilo
								H. . Projeto e análise de dispositivo para transferência de
								energia sem fios auto-sintonizavel por frequência. In: MOMAG -
								17º SBMO - Simpósio Brasileiro de Micro-ondas e Optoeletrônica
								12º CBMag - Congresso Brasileiro de Eletromagnetismo, 2016,
								Porto Alegre. MOMAG - 17º SBMO - Simpósio Brasileiro de
								Micro-ondas e Optoeletrônica 12º CBMag - Congresso Brasileiro de
								Eletromagnetismo, 2016.
							</li>

							<li class="PubliListas">
								{' '}
								ABREU, R. L. ; ZOCCAL, L. B. ; TALES C. PIMENTA ; Spadoti,
								Danilo H. . Self - Tuning of Impedance Matching for Wireless
								Power Transfer Devices. In: INSCIT - International Symposium on
								Instrumentation Systems, Circuits and Transducers, 2016, Belo
								Horizonte. INSCIT - International Symposium on Instrumentation
								Systems, Circuits and Transducers, 2016.
							</li>

							<li class="PubliListas">
								{' '}
								JUNQUEIRA, M.A.F.C. ; Lucas H. Gabrielli ; MEJIA, F. B. ;
								Spadoti, Danilo H. . 3D Isotropic TO via parametrzation. In:
								IRMMW-THz: 41th International Conference on Infrared,
								Millimeter, and Terahertz Waves, 2016, Copenhagen. IRMMW-THz:
								41th International Conference on Infrared, Millimeter, and
								Terahertz Waves, 2016.
							</li>

							<li class="PubliListas">
								{' '}
								MELO, S. ; PINNA, S. ; LAGHEZZA, F. ; SCOTTI, F. ; COSTA, I. F.
								; S. JR, A. C. ; BOGONI, A. ; SPADOTI, DANILO . Photonics-based
								dual-use transceiver based on a single dual-band antenna array.
								In: SBrT 2016 - XXXIV Simpósio Brasileiro de Telecomunicações e
								Processamento de Sinais, 2016, Santarém-PA. SBrT 2016 - XXXIV
								Simpósio Brasileiro de Telecomunicações e Processamento de
								Sinais, 2016
							</li>
						</ul>
					</div>
				</div>
			</div>

			<summary>
				<div class="col-lg-12">
					<h2 class="page-header">2015</h2>
				</div>
			</summary>

			<div class="col-md-12 text-justify">
				<div class="thumbnail" style={{ paddingBottom: '1%' }}>
					<div class="caption">
						<h4>Revistas</h4>
						<ul>
							<li class="PubliListas">
								{' '}
								JUNQUEIRA, MATEUS ; GABRIELLI, LUCAS ; SPADOTI, DANILO .
								Comparison of Anisotropy Reduction Strategies for Transformation
								Optics Designs. IEEE Photonics Journal, v. 7, p. 1-1, 2015.
							</li>

							<li class="PubliListas">
								{' '}
								JUNQUEIRA, MATEUS A. F. C. ; GABRIELLI, LUCAS H. ; Spadoti,
								Danilo H. . Reflectionless quasiconformal carpet cloak via
								parameterization strategy. Journal of the Optical Society of
								America. B, Optical Physics, v. 32, p. 2488, 2015.
							</li>
						</ul>
						<h4>Congressos</h4>
						<ul>
							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; S. JR, A. C. ; REIS, E. ; SPADOTI, D. H. ;
								MOREIRA NETO, J. . Optically Controlled Reconfigurable Antenna
								Array Based on a Slotted Circular Waveguide. In: European
								Conference on Antennas and Propagation, 2015, Lisboa. 9th
								European Conference on Antennas and Propagation, 2015.
							</li>

							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; S. JR, A. C. ; SPADOTI, D. H. . Frequency-agile
								E-shaped Printed Antenna for Millimeter Waves Applications. In:
								IEEE AP-S Symposium on Antennas and Propagation 2015, 2015,
								Vancouver. IEEE AP-S Symposium on Antennas and Propagation,
								2015.
							</li>

							<li class="PubliListas">
								{' '}
								SALGADO, F. C. ; SPADOTI, D. H. . Integrated liquid-filled
								directional coupler for temperature sensing. In: 24th
								International Conference on Optical Fibre Sensors, 2015,
								Curitiba,PR. 24th International Conference on Optical Fibre
								Sensors, 2015.
							</li>

							<li class="PubliListas">
								{' '}
								JUNQUEIRA, M.A.F.C. ; Lucas H. Gabrielli ; SPADOTI, D. H. .
								Parameterization Strategy for Anisotropy Reduction in the Carpet
								Cloak. In: International Microwave and Optoelectronics
								Conference - IMOC, 2015, Porto de Galinhas. International
								Microwave and Optoelectronics Conference - IMOC, 2015.
							</li>

							<li class="PubliListas">
								{' '}
								PETRINI, P. A. ; PIZOLATTO JUNIOR, J. C. ; De Francisco, C. A. ;
								ALCANTARA, L.D.S. ; SALGADO, F. C. ; SPADOTI, D. H. . A
								liquid-filled W-type optical fiber temperature sensor. In:
								International Microwave and Optoelectronics Conference - IMOC,
								2015, Porto de Galinhas. International Microwave and
								Optoelectronics Conference - IMOC, 2015.
							</li>

							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; SANTOS, R. A. ; PATRICIO, S. C. ; Ribeiro, J.A.J.
								; SPADOTI, D. H. ; BOGONI, A. ; S. JR, A. C. . A Dual-band
								Slotted Waveguide Antenna Array for Radars Applications. In:
								International Microwave and Optoelectronics Conference - IMOC,
								2015, Porto de Galinhas. International Microwave and
								Optoelectronics Conference - IMOC, 2015.
							</li>

							<li class="PubliListas">
								{' '}
								COSTA, I. F. ; S. JR, A. C. ; SPADOTI, D. H. . Dual-band Slotted
								Waveguide Antena Array for Communication, Maritime Navigation
								and Surveillance Radar. In: IWT - International Workshop on
								Telecommunications, 2015, Santa Rita do Sapucai. IWT -
								International Workshop on Telecommunications, 2015.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Container>
)

export default Publicacoes
