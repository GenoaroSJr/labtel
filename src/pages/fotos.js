import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';

const Fotos = (props) => {
  const func = (img) => {
    if (typeof img !== 'number') {
      return null;
    }
    return (
      <Image
        src={`/imagens/galeria/${img.toString().padStart(4, '0')}.jpg`}
        style={{ width: '30%', marginBottom: 20, marginRight: 10 }}
        key={img}
      />
    );
  };

  const images = Array.from({ length: 50 }, (_, i) => i + 1).reverse();

  return (
    <Container fluid style={{ marginTop: 20, padding: 20 }}>
      <h1>{props.en ? 'Photo Gallery' : 'Galeria de Fotos'}</h1>
      <Card style={{ marginBottom: 30 }} />
      <div style={{ textAlign: 'center' }}>{images.map(func)}</div>
    </Container>
  );
};

export default Fotos;
