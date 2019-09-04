import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';

class Fotos extends React.Component {
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
    const images = this.importAll(
      require.context('../imagens/galeria', false, /\.(png|jpe?g|svg)$/)
    );
    images.reverse();
    return (
      <Container fluid style={{ marginTop: 20, padding: 20 }}>
        <h1>{this.props.en ? 'Photo Gallery' : 'Galeria de Fotos'}</h1>
        <Card style={{ marginBottom: 30 }} />
        <div style={{ textAlign: 'center' }}>{images.map(this.func)}</div>
      </Container>
    );
  }
}

export default Fotos;
