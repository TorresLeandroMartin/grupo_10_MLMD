import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItems";

// LA IDEA CON ESTE COMPONENTE ERA QUE EN EL HOME DEL DASHBOARD TENER UN
// CAROUSEL QUE NOS MUESTRE PRODUCTOS - NO ME FUNCIONO
// TENGO QUE PONER ALGO EN EL HOME

function Bienvenidos() {
  // declarar el estado inicial del componente
  const [Productos, setProductos] = useState([]);

  // Trabajar con el ciclo de vida del componente

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.datos);
        setProductos(data.datos);
      });
  }, []);

  return (
    <Carousel>
      {Productos.map((producto, index) => {
        return <CarouselItem {...producto} key={producto + index} />;
      })}
    </Carousel>
  );
}

export default Bienvenidos;
