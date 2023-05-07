import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ListadoProductos from "./ListadoProductos";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <h1>Ecommerce Project</h1> */}

        <Routes>
          <Route path="/" element={<ListadoProductos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/add" element={<AddProduct />} /> */}
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          {/* <Route path="/update" element={<UpdateProduct />} /> */}
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
