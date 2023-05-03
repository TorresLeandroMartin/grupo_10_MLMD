import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProductosTabla from "./ProductosTabla";
import ProductosCartas from "./ProductosCartas"

function BarraLateral() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>House Clothing</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">Inicio</Link>
              <Link to="/tabla">Tabla</Link>
              <Link to="/cartas">Cartas</Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/cartas">
            <ProductosCartas />
          </Route>
          <Route exact path="/tabla">
            <ProductosTabla />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default BarraLateral;
