import { Card, Col } from "react-bootstrap";

export default function ProjectCards ({portfolio: {id, title, website, content}}) {
  return (
    <Col key={id} sm={12} md={6} lg={3}>
      <Card>
        <h2>{title}</h2>
      </Card>
    
    </Col>
  )
}