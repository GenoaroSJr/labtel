import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Iframe from 'react-iframe';

class Workshop extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: 20 }}>
        <h1>Workshop</h1>
        <Card style={{ marginBottom: 30 }} />
        <Iframe
          url="https://admin.tago.io/public/dashboard/5d6d1a0eca5003001b180a54/cb4092f0-a1f2-47e1-a329-e1ae13bf4b23"
          width="100%"
          height="900px"
          scrolling="no"
        />
      </Container>
    );
  }
}

export default Workshop;
