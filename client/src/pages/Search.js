import React from 'react';
import SearchBooksForm from '../components/SearchBooksForm';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
// import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Search Books</h1>
      </Jumbotron>
      <SearchBooksForm />
    </Container>
    // <Container fluid>
    //   <Row>
    //     <Col size='md-12'>
    //       <Jumbotron>
    // <div>

    // </div>
    /* </Jumbotron>
          <SearchBooksForm />
        </Col>
      </Row>
    </Container> */
  );
};

export default Search;
