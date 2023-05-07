import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cartas from "./Cartas";

function ListadoProductos(props) {
  return (
    <>
      <Router>
        <tr>
          <td>{props.id}</td>
          <td>{props.nombre}</td>
          <td>{props.precio}</td>
          <td>{props.talle}</td>
          <td>{props.color}</td>
          <td>{props.estilo}</td>
          <td>
            {
              <img
                style={{ width: 4 + "rem" }}
                src={`http://localhost:3001/img/avatars/${props.imagenDelProducto}`}
                alt={props.nombre}
              />
            }
          </td>
          <td>
            <button>
              <Link to={`/api/productos/${props.id}`}>Ver el detalle de {props.nombre}</Link>
            </button>
          </td>
        </tr>
        <Switch>
          <Route path={`/api/productos/${props.id}`}>
            <Cartas />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default ListadoProductos;
