import Header from "./Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function withRouter(Component) {
  function UpdateProduct(props) {
    const [data, setData] = useState([]);

    useEffect(async () => {
      let result = await fetch(
        "http://localhost:3001/api/productos/detalle/" + props.match.params.id
      );
      result = await result.json();
      setData(result);
    });

    return (
      <div>
        <Header />
        <h1>UpdateProduct Page</h1>
        <input type="text" defaultValue={data.name} /> <br />
        <br />
        <input type="text" defaultValue={data.price} /> <br />
        <br />
        <input type="text" defaultValue={data.description} /> <br />
        <br />
        <input type="file" defaultValue={data.imagenDelProducto} /> <br />
        <br />
        <img
          style={{ width: 100 }}
          src={`http://localhost:3001/img/avatars/${data.imagenDelProducto}`}
        />
        <br /> <br />
        <button>Update Product</button>
      </div>
    );
  }
}

export default withRouter(UpdateProduct());
