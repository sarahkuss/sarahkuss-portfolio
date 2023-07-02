import { Col, Container, Image, Row } from "react-bootstrap";

export default function Intro () {
  return (
    <main>
      <Container className="intro-cont">
        <Row className="intro-row">
        <Col sm={12} md={6} className="image-col">
          <Image className="my-image" fluid src='/images/skFront.jpg' />
        </Col>
        <Col sm={12} md={6} className="text-col">
          <h1>Hi! I'm Sarah Kuss</h1>
          <p>I am a Full Stack Software Engineer located in South Florida. </p>
          <p>I am former zookeeper who decided to completely change careers and become a part of the tech industry.
            Although zookeeping was an incredible, one-of-a-kind job, I reached a point where I realized I was no longer learning.
            I was falling behind in the modern world and lost sight of my passion- conservation. That's when I realized I could have the best of both worlds. My goal is to connect people with conservation through technology! 
          </p>
          <p>
            Technology advances every single day and there is always something new to learn. <br /> 
          </p>
        </Col>
        </Row>
      </Container>
    </main>
  )
}