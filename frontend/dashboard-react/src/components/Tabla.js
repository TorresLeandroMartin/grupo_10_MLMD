import React from "react";

function ListadoProductos(props) {
    return (
        <>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.nombre}</td>
                    <td>{props.precio}</td>
                    <td>{props.talle}</td>
                    <td>{props.color}</td>
                    <td>{props.estilo}</td>
                    <td>{<img style={{width:4+'rem'}} src={`http://localhost:3001/img/avatars/${props.imagenDelProducto}`} alt={props.nombre} />}</td>
                </tr>
        </>
    )
}

export default ListadoProductos;