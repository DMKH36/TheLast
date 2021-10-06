import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import home from "./halaman/home";
import toko from "./halaman/toko";
import kelompok from "./halaman/kelompok";
import hp from "./halaman/hp";
import laptop from "./halaman/laptop";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Kelompok 44
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/toko">
            Informasi Toko
          </Nav.Link>
          <Nav.Link as={Link} to="/kelompok">
            Anggota Kelompok
          </Nav.Link>
          <NavDropdown title="Katalog" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/hp">Smartphone</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/laptop">Laptop</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <Switch>
      <Route path="/home" exact component={home} />
      <Route path="/toko" exact component={toko} />
      <Route path="/kelompok" exact component={kelompok} />
      <Route path="/hp" exact component={hp} />
      <Route path="/laptop" exact component={laptop} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;