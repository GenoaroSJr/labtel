import React, { useState } from 'react';
import { Container, Card, Image, Button } from 'react-bootstrap';

const Eventos = ({ en }) => {
  const [mais, setMais] = useState(false);
  const func = (img) => {
    if (typeof img !== 'number') {
      return null;
    }
    return (
      <Image
        src={`/imagens/workshop/${img.toString().padStart(4, '0')}.jpg`}
        style={{ width: '30%', marginBottom: 20, marginRight: 10 }}
        key={img}
      />
    );
  };

  let imgs = Array.from({ length: 18 }, (_, i) => i + 1);

  if (!mais) {
    imgs = imgs.slice(0, 3);
  }

  return (
    <Container fluid style={{ marginTop: 20, padding: 20 }}>
      <h1>{en ? 'Events' : 'Eventos'}</h1>
      <Card style={{ marginBottom: 30 }} />
      <h2>Workshop</h2>
      <hr />
      <Card>
        <Card.Header>{en ? 'Photos' : 'Fotos'}</Card.Header>
        <Card.Body style={{ padding: 5 }}>
          <div style={{ textAlign: 'center' }}>{imgs.map(func)}</div>
        </Card.Body>
        <Card.Footer style={{ textAlign: 'right' }}>
          <Button
            onClick={() => {
              setMais(!mais);
            }}
          >
            {en
              ? 'Show ' + (mais ? 'less' : 'more')
              : 'Mostrar ' + (mais ? 'menos' : 'mais')}
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Eventos;
