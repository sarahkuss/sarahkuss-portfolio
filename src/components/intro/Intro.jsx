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
          <p>
            Always learning, I strive to stay up-to-date on the latest technological trends and advancements. I am currently intering as a Web3 Software Engineer, working on a women-led NFT that raises money for scholarships that go to women pursuing tech. 
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