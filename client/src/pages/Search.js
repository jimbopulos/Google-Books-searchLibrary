import React from 'react';
import SearchBooksForm from '../components/SearchBooksForm';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
// import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <Container>
      <Row>
        <Col size='md-12'>
          <Jumbotron>
            <h1>Google Search Library</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size='md-12'>
          <SearchBooksForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
