import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import myResume from '../assets/myResume.pdf';


const Resume = () => {
  return (
    <>
    <section id="resume">
      <Container>
        <h2 className='m-4'>Resume</h2>
        <Button href={myResume} target='_blank' className='m-4' variant='info'>Download Resume</Button>
        <Button href='/GitHubRepos' variant='outline-primary'>GitHub Repos</Button>
      </Container>
    </section>
        <Container>
        <Row>
            <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active >Design</ListGroup.Item>
              <ListGroup.Item>Service Design</ListGroup.Item>
              <ListGroup.Item>UX/UI Design</ListGroup.Item>
              <ListGroup.Item>Design Thinking</ListGroup.Item>
              <ListGroup.Item>Design Sprint</ListGroup.Item>
              <ListGroup.Item>User Research</ListGroup.Item>
              <ListGroup.Item>User Persona</ListGroup.Item>
              <ListGroup.Item>Usability Testing</ListGroup.Item>
              <ListGroup.Item>User Journey</ListGroup.Item>
              <ListGroup.Item>User Persona</ListGroup.Item>
              <ListGroup.Item>Wireframing</ListGroup.Item>
              <ListGroup.Item>Prototyping - Low & High Fidelity</ListGroup.Item>
              <ListGroup.Item>Design System</ListGroup.Item>
              <ListGroup.Item>Figma</ListGroup.Item>
              <ListGroup.Item>Lean Inception</ListGroup.Item>
              <ListGroup.Item>Workshops and Presenation</ListGroup.Item>
              <ListGroup.Item>Human-Centred Design </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active >Fullstack Development</ListGroup.Item>
              <ListGroup.Item>HTML, CSS, JavaScript</ListGroup.Item>
              <ListGroup.Item>Git</ListGroup.Item>
              <ListGroup.Item>Web APIs</ListGroup.Item>
              <ListGroup.Item>Third-Party APIs</ListGroup.Item>
              <ListGroup.Item>Server-Side APIs</ListGroup.Item>
              <ListGroup.Item>Node.js</ListGroup.Item>
              <ListGroup.Item>Object-Oriented Programming (OOP)</ListGroup.Item>
              <ListGroup.Item>Express.js</ListGroup.Item>
              <ListGroup.Item>PostgreSQL</ListGroup.Item>
              <ListGroup.Item>NoSQL MongoDB</ListGroup.Item>
              <ListGroup.Item>Object-Relational Mapping (ORM) - Sequelize</ListGroup.Item>
              <ListGroup.Item>Mode-view-controller (MVC) framework (Handlebars.js)</ListGroup.Item>
              <ListGroup.Item>Progressive Web Application (PWA)</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>MERN</ListGroup.Item>
              <ListGroup.Item>State</ListGroup.Item>
            </ListGroup>
            </Col>
        </Row>
      </Container>
      </>
    );
};

export default Resume;
