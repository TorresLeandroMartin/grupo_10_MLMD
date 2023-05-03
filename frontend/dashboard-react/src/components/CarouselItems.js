import Carousel from "react-bootstrap/Carousel";

function CarrouselItem(props) {
  return (
    <>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={`http://localhost:3001/img/avatars/${props.imagenDelProducto}`}
          alt="Slide"
        />
        <Carousel.Caption>
          <h3>{props.nombre}</h3>
          <p>{props.descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
}

export default CarrouselItem;
