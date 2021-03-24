import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

const Saved = () => {
  return (
    <Container>
      <Row>
        <Col size='md-12'>
          <Jumbotron>
            <h1>Saved Books</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Saved;
