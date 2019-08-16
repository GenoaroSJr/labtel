import React from 'react'
import { Row, Col, Image, Card } from 'react-bootstrap'

const Membro = ({ nome, titulo, texto, link, img }) => (
	<Card style={{ marginTop: 20 }}>
		<Row>
			<Col md="auto">
				<Image style={{ paddingLeft: 30, paddingTop: 30 }} src={img} />
			</Col>
			<Col>
				<Card.Body style={{ padding: 15, textAlign: 'justify' }}>
					<Card.Title style={{ paddingLeft: 10 }}>{nome}</Card.Title>
					<Card.Subtitle style={{ paddingLeft: 20 }}>{titulo}</Card.Subtitle>

					<Card.Text style={{ padding: 15 }}>
						<p>{texto}</p>
						<a href={link} class="btn btn-info">
							<strong>Endereço Lattes</strong>
						</a>
					</Card.Text>
				</Card.Body>
			</Col>
		</Row>
	</Card>
)

export default Membro
