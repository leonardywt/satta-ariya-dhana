import {Navbar, Container} from "react-bootstrap"

const Footer = () => {
    return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Satta Ariya Dhana</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            &#169;sattaariyadhana, All Right Reserved
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default Footer