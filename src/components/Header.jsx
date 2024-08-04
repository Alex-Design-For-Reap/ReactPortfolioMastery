import React from 'react';
import Navigation from './Navigation';
import { toggleTheme } from '../utils/themeToggle';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <Container className='p-3 mb-3 container justify-content-between align-items-center'>
          <Row>
            <Col>
              <h3>Alex Da Silva</h3>
            </Col>
            <Col xs={6}>
              <Navigation />
            </Col>
            <Col>
              <button onClick={toggleTheme} className="btn btn-info ms-3">
                      Color Mode
                    </button>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
