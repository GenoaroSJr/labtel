import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

const Fotos = ({ en }) => (
	<Container style={{ marginTop: 20 }}>
		<h1>{en ? 'Photo Gallery' : 'Galeria de Fotos'}</h1>
		<Card />

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria32.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria2.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria3.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria5.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria6.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria7.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria8.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/EFEI_logo.png')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria9.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria10.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria12.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria13.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria14.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria15.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria16.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria17.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria18.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria19.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria20.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria21.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria22.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria23.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria24.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria25.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria26.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria27.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria28.jpg')} />
			</Col>
		</Row>

		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria29.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria30.jpg')} />
			</Col>

			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria31.jpg')} />
			</Col>
		</Row>
		<Row style={{ marginTop: 15 }}>
			<Col md={4} style={{ marginTop: 8 }}>
				<Image fluid src={require('../imagens/galeria/imagemGaleria1.jpg')} />
			</Col>
		</Row>
	</Container>
)

export default Fotos
