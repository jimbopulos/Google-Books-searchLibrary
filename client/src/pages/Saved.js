import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import SavedBooks from '../components/SavedBooks';

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
      <Row>
        <Col size='md-12'>
          <SavedBooks />
        </Col>
      </Row>
    </Container>
  );
};

export default Saved;
