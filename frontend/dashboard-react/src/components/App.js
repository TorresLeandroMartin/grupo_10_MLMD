import React from "react";
import NavBar from "./NavBar";
import Bienvenidos from "./Bienvenidos"
function App() {
  return (
    // Tambien es posible solamente hacerlo asi
    // <>
    // </>

    // Debo declarar el estado inicial de mi componente
    <React.Fragment>
      <>
        <NavBar />
        <br />
        <br />
        <Bienvenidos />
      </>
    </React.Fragment>
  );
}

export default App;
