import React from 'react';
import { Container, Card, Image, Button } from 'react-bootstrap';

class Eventos extends React.Component {
  state = {
    mais: false
  }

  importAll(r) {
    return r.keys().map(r);
  }

  func = img => (
    <Image
      src={img}
      style={{ width: '30%', marginBottom: 20, marginRight: 10 }}
      key={img}
    />
  );

  render() {
    const workshop = this.importAll(
      require.context('../imagens/workshop', false, /\.(png|jpe?g|svg)$/)
    );
    let imgs;
    if(this.state.mais)imgs = workshop;
    else imgs = workshop.slice(0,3);

    return (
      <Container fluid style={{ marginTop: 20, padding: 20 }}>
        <h1>{this.props.en ? 'Events' : 'Eventos'}</h1>
        <Card style={{ marginBottom: 30 }} />
        <h2>Workshop</h2>
        <hr/>
        <Card>
          <Card.Header>
            Fotos
          </Card.Header>
          <Card.Body style={{padding: 5}}>
            <div style={{ textAlign: 'center' }}>{imgs.map(this.func)}</div>
          </Card.Body>
          <Card.Footer style={{textAlign:"right"}}>
            <Button onClick={() => {this.setState({mais:!this.state.mais})}}>Mostrar {this.state.mais?"menos":"mais"}</Button>
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default Eventos;
