import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
  return (
    <>
      <section id="about-me">
        <h2 className='m-4'>About Me</h2>
        <div className='container-sm'>
          <img src="src/assets/images/Alex-da-silva.jpeg" alt="Alex Da Silva" className="img-fluid img-thumbnail about-img" />
        </div>
        <p className='m-4'>I'm an end-to-end seasoned Designer with over a decade of expertise in product, service, and UI/UX design. I am skilled in engaging with cross-functional teams, conducting user research, and designing innovative solutions that balance usability, feasibility, and viability. I excel at leveraging human-centred design principles to create solutions that not only meet user needs but also align with business goals and technical constraints.</p>
      </section>
      
      <Row xs={1} md={3} className="g-4">
      <Col>
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>UX/UI Designer</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Deliver a positive and memorable experience from the first interaction to ongoing engagement.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="secondary "border="secondary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Service Designer</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Tackle complex problems and find the best balance between what is desirable, feasible, and viable.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="tertiary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Fullstack Developer</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      
    </>
  );
}

export default AboutMe;
