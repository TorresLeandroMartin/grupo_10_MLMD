import React from "react";
import NavBar from "./NavBar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ProductosCartas from "./ProductosCartas";
function App() {
  return (
    // Tambien es posible solamente hacerlo asi
    // <>
    // </>

    // Debo declarar el estado inicial de mi componente
    <React.Fragment>
      <>
        <NavBar />
      </>
    </React.Fragment>
  );
}

export default App;
