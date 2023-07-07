import { Card, Container, Row } from "react-bootstrap";
import portfolio from '../../data/portfolio.json'
import ProjectCards from "./ProjectCards";


export default function Projects () {
  
  return(
    <>
    <Container fluid>
      <Row>
        {portfolio.map((element) => {
          return !element
          ? (<p>Loading</p>)
          : (<ProjectCards portfolio={element} />)
        })}
      </Row>
    </Container>
    </>
  )
}