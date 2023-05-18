
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { Contact } from "./pages/contact";

import ViewProduct from "./pages/ViewProduct/ViewProduct";
import DeleteProduct from "./pages/DeleteProduct/DeleteProduct";
import EditProduct from "./pages/EditProduct/EditProduct";
import UpdateImg from "./pages/UpdateImg/UpdateImg";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ViewProduct/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updateimage" element={<UpdateImg/>} />
            <Route path="/deleteProduct" element={<DeleteProduct/>} />
            <Route path="/editProduct" element={<EditProduct/>} />
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;