import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myImage from '../assets/images/Alex-da-silva.jpeg';

const AboutMe = () => {
  return (
    <>
      <section id="about-me">
        <h2 className='m-4'>About Me</h2>
        <div className='container-sm'>
          <img src={myImage} alt="Alex Da Silva" className="img-fluid img-thumbnail about-img" />
        </div>
        <p className='m-4'>I'm an end-to-end seasoned Designer with over a decade of expertise in product, service, and UI/UX design. I am skilled in engaging with cross-functional teams, conducting user research, and designing innovative solutions that balance usability, feasibility, and viability. I excel at leveraging human-centred design principles to create solutions that not only meet user needs but also align with business goals and technical constraints.</p>
      </section>
      
      <Row xs={1} md={3} className="g-4 p-4">
      <Col>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>UX/UI Designer</Card.Title>
            <Card.Text>
            Deliver a memorable experience from the first interaction to ongoing engagement.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="success" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Service Designer</Card.Title>
            <Card.Text>
            Tackle complex problems and find the best balance between what is desirable, feasible, and viable.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="info" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Fullstack Developer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      
    </>
  );
}

export default AboutMe;
