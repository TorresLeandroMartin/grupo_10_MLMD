import React, { useState , useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function Cartas(props) {

  // declarar el estado inicial del componente
  const [producto, setProducto] = useState([]);

  // Trabajar con el ciclo de vida del componente

  useEffect(() => {
    fetch("http://localhost:3001/api/productos/:id")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        setProducto(data.datos);
      });
  }, []);

  console.log(producto)

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`http://localhost:3001/img/avatars/${props.imagenDelProducto}`}
        />
        <Card.Body>
          <Card.Title className="text-center">{props.nombre}</Card.Title>
          <Card.Text className="text-center">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Descubrime!</Accordion.Header>
                <Accordion.Body>
                  Valor: ${props.precio} <br />
                  Descripcion <br /> {props.descripcion} <br />
                  <span><strong>Caracteristicas!!</strong></span> <br />
                  Talle: {props.talle} <br />
                  Color: {props.color} <br />
                  Estilo: {props.estilo} <br />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Text>
          <Button variant="primary">Go somewhere{props.id}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cartas;
