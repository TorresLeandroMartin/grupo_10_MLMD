
import { BrowserRouter, Link } from "react-router-dom";


<BrowserRouter>
{/*<!-- Sidebar -->*/}
<ul
  className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
  id="accordionSidebar"
>
  {/*<!-- Nav Item - Dashboard -->*/}
  <li className="nav-item active">
    <Link className="nav-link" to="/">
      <i className="fas fa-fw fa-tachometer-alt"></i>
      <span>Inicio</span>
    </Link>
  </li>

  {/*<!-- Nav Item - Pages -->*/}
  <li className="nav-item">
    <Link className="nav-link" to="/tabla">
      <i className="fas fa-fw fa-folder"></i>
      <span>Tabla</span>
    </Link>
  </li>

  {/*<!-- Nav Item - Charts -->*/}
  <li className="nav-item">
    <Link className="nav-link" to="/cartas">
      <i className="fas fa-fw fa-chart-area"></i>
      <span>Charts</span>
    </Link>
  </li>
</ul>
{/*<!-- End of Sidebar --> */}
</BrowserRouter>

import Accordion from "react-bootstrap/Accordion";

{/* <Accordion defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <Accordion.Header>{props.nombre}</Accordion.Header>
  <Accordion.Body>
    {props.precio}
    {props.descripcion}
    {props.talle}
    {props.color}
    {props.estilo}
    {props.descripcion}
  </Accordion.Body>
</Accordion.Item>
</Accordion> */}
