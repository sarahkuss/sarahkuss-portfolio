import { Container, Navbar, Nav } from "react-bootstrap";


export default function NavMenu () {
  return (
    <Navbar bg="dark" sticky="top" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>Image</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            {/* <Nav.Item>Projects</Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}