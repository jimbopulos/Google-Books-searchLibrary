import React from 'react';
import SearchBooksForm from '../components/SearchBooksForm';
import { Container, Row, Col } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
// import { Link } from 'react-router-dom';

const Search = () => {
  return (
    // <Container fluid>
    //   <Row>
    //     <Col size='md-12'>
    //       <Jumbotron>
    <div>
      <h1>This is the search page, woopty woop</h1>
      <SearchBooksForm />
    </div>
    /* </Jumbotron>
          <SearchBooksForm />
        </Col>
      </Row>
    </Container> */
  );
};

export default Search;
