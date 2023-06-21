import { Col, Container, Image, Row } from "react-bootstrap";

export default function Intro () {
  return (
    <main>
      <Container className="intro-cont">
        <Row className="intro-row">
        <Col sm={12} md={6} className="image-col">
          <Image className="my-image" fluid src='/images/skFront.jpg' />
        </Col>
        <Col className="text-col">
          <h1>Hi! I'm Sarah Kuss</h1>
          <p>I am a software engineer located in South Florida. </p>
        </Col>
        </Row>
      </Container>
    </main>
  )
}